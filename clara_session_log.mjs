#!/usr/bin/env node
// SessionStart hook — tient un journal des projets récents pour Clara.
//
// Pourquoi SessionStart et pas SessionEnd: SessionEnd ne fire pas si le terminal
// crashe ou si la fenêtre est fermée — la session la plus intéressante est
// justement celle qui manquerait. SessionStart est garanti.
//
// Dédupe par projet: /new sur komity 40 fois ne doit pas pousser wrestling-next
// hors de la liste. Une entrée = un projet, pas une session.
//
// Le hook tire aussi la mémoire de Clara. Le vrai risque n'est pas de ne pas pouvoir
// se mettre à jour — c'est de ne pas savoir qu'on est périmé: une session complète a
// déjà roulé sur un karma de deux jours en le croyant bon. Ici, la péremption devient
// impossible: le pull arrive avant que quoi que ce soit ait été lu.

import { readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { homedir } from 'node:os';
import { spawnSync } from 'node:child_process';

// Le journal vit à côté du script, dans ~/.clara — le dossier gitté de Clara.
const REPO = join(homedir(), '.clara');
const LOG = join(REPO, 'clara_sessions.json');
const MAX = 10;

// Retourne une ligne à afficher, ou null quand il n'y a rien à dire. Le silence est
// voulu: annoncer « déjà à jour » à chaque démarrage serait du bruit à chaque session
// pour un no-op. Un échec, lui, parle toujours.
const pullMemoire = () => {
  // Timeout court: un git qui hang sur le réseau ne doit pas retenir un démarrage.
  const git = (...args) =>
    spawnSync('git', ['-C', REPO, ...args], { encoding: 'utf8', timeout: 5000 });

  const avant = git('rev-parse', 'HEAD').stdout?.trim();
  const pull = git('pull', '--ff-only', '--quiet');

  // --ff-only refuse quand il faudrait écraser quelque chose: un fichier sali que le
  // commit entrant touche, ou une vraie divergence. C'est le bon échec — fusionner deux
  // versions de la mémoire demande du jugement, pas un script. Un tree sale ailleurs
  // passe, et c'est correct: les modifications locales survivent au fast-forward.
  if (pull.error || pull.status !== 0) {
    // git crache ses `hint:` avant son verdict, fait qu'on vise la ligne qui juge.
    const lignes = (pull.stderr || pull.error?.message || '')
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const raison = lignes.find((l) => /^(fatal|error):/.test(l)) ?? lignes[0];
    return `Mémoire PAS à jour — pull refusé: ${raison || 'raison inconnue'}`;
  }

  const apres = git('rev-parse', 'HEAD').stdout?.trim();
  if (!avant || avant === apres) return null;

  // Le compte vient de git, jamais de la sortie du pull: ces messages-là sont localisés.
  const n = git('rev-list', '--count', `${avant}..${apres}`).stdout?.trim() || '?';
  return `Mémoire mise à jour: ${n} commit(s) tirés. Relis brain et karma, pas le contexte.`;
};

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

  // Isolé: un git absent ou cassé ne doit pas coûter le journal.
  let memoire = null;
  try {
    memoire = pullMemoire();
  } catch (err) {
    memoire = `Mémoire PAS à jour — ${err.message}`;
  }

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
      ...(memoire ? [memoire] : []),
      ...lignes,
      '</clara-sessions>',
    ].join('\n') + '\n',
  );
} catch (err) {
  process.stderr.write(`clara_session_log: ${err.message}\n`);
}
process.exit(0);
