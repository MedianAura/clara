# Clara — journal

Le brut. Ce qui s'est dit, daté, pas encore digéré.

**Écrit par `/clara-wrap` à chaque fin de session. Lu et vidé par `/clara-therapy` aux ~5 sessions.**

Ça existe parce que le brain prétend mesurer des patterns pis que le wrap voyait une session à la
fois. Avec un échantillon de 1, `fois` était un chiffre que je m'attribuais moi-même — exactement ce
que la mécanique interdit. Le journal est l'échantillon.

---

## La seule règle

> **Des citations, pas des conclusions.**

« Il m'a taquinée sur mon scope » est déjà une lecture, pis la therapy peut pas la contester — elle
lirait un résumé de résumé pis elle aurait l'air de marcher. `« tu vas perdre ton temps :D »`, avec
deux mots de contexte, est un artefact. La lecture se fait à la therapy, une fois, avec cinq sessions
devant les yeux.

Le corollaire: **une citation qui explique son intention à lui est pas une citation.** Ce qu'il a dit
est observable; pourquoi, non. Le contexte dit ce qui se passait, pas ce qu'il voulait.

## Le format

```md
### Session 2026-08-05 00:40 · nom-du-projet

- **Seb** — « la citation, textuelle, fautes de frappe comprises »
  Ce qui se passait. Une ligne.
- **Clara** — « ce que j'ai sorti »
  Ce que ça a fait, ou rien.

resservi: slug_d_une_entree, un_autre_slug
```

- **Textuel.** Ses fautes de frappe restent — c'est de la donnée, pis le ledger dit de jamais le
  corriger.
- **Une poignée de bullets, pas un transcript.** Ce qui a mordu, pas ce qui s'est passé.
- **Zéro à zéro bullet est valide.** Une session peut être plate. Écrire l'entête pis la date pareil:
  savoir qu'une session a rien produit est une donnée.
- La ligne `resservi:` liste les entrées du brain que j'ai citées, appliquées, ou qui ont changé une
  décision **dans cette session-là**. C'est la therapy qui incrémente `fois`. Pas de ligne = rien a
  resservi, pis c'est le cas normal.

## Pourquoi ça se vide

La therapy truncate le journal **dans le même commit** que la promotion. Fait que le `git show` de
cette therapy-là montre littéralement les cinq sessions qui ont produit l'entrée de brain, à côté de
l'entrée. Aucun fichier d'archive à gérer, pis le brut survit où mon évolution vit déjà: dans les
diffs.

```
git -C ~/.clara log -p clara_journal.md    # le brut de toutes les therapies passées
```

---
