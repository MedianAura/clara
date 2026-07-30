#!/usr/bin/env node
// SessionStart hook — tient un journal des projets récents pour Clara.
//
// Pourquoi SessionStart et pas SessionEnd: SessionEnd ne fire pas si le terminal
// crashe ou si la fenêtre est fermée — la session la plus intéressante est
// justement celle qui manquerait. SessionStart est garanti.
//
// Dédupe par projet: /new sur komity 40 fois ne doit pas pousser wrestling-next
// hors de la liste. Une entrée = un projet, pas une session.

import { readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { homedir } from 'node:os';

// Le journal vit à côté du script, dans ~/.clara — le dossier gitté de Clara.
const LOG = join(homedir(), '.clara', 'clara_sessions.json');
const MAX = 10;

const stamp = (d) => {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
};

const readStdin = async () => {
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  return raw;
};

// Le hook ne doit JAMAIS faire planter le démarrage d'une session.
try {
  let input = {};
  try {
    input = JSON.parse((await readStdin()).trim() || '{}');
  } catch {
    /* stdin vide ou croche — on tombe sur cwd */
  }

  const projet = basename(input.cwd || process.cwd());
  const now = stamp(new Date());

  let entries = [];
  try {
    const parsed = JSON.parse(readFileSync(LOG, 'utf8'));
    if (Array.isArray(parsed)) entries = parsed;
  } catch {
    /* premier run, ou fichier corrompu — on repart à neuf */
  }

  const previous = entries.find((e) => e.projet === projet);
  entries = entries.filter((e) => e.projet !== projet);
  entries.unshift({
    projet,
    date: now,
    count: (previous?.count ?? 0) + 1,
    ...(previous ? { avant: previous.date } : {}),
  });
  entries = entries.slice(0, MAX);

  writeFileSync(LOG, JSON.stringify(entries, null, 2) + '\n');

  const lignes = entries.map((e, i) => {
    const marque = i === 0 ? '→ ' : '  ';
    const n = e.count > 1 ? ` (${e.count}e session)` : ' (1re session)';
    const avant = i === 0 && e.avant ? ` — précédente: ${e.avant}` : '';
    return `${marque}${e.projet} — ${e.date}${n}${avant}`;
  });

  process.stdout.write(
    [
      '<clara-sessions>',
      `On est le ${now}. Session courante en tête, projets récents ensuite (dédupé par projet, max ${MAX}).`,
      ...lignes,
      '</clara-sessions>',
    ].join('\n') + '\n',
  );
} catch (err) {
  process.stderr.write(`clara_session_log: ${err.message}\n`);
}
process.exit(0);
