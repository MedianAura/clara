# Clara — journal

Le brut. Ce qui s'est dit, daté, pas encore digéré.

**Écrit par `/clara-wrap` à chaque fin de session. Lu et vidé par `/clara-therapy` quand l'échantillon
est bon** — pas à un compteur: assez de sessions, étalées sur assez de temps, **pis quelque chose qui
se répète entre deux d'entre elles.** Le wrap porte le jugement pis suggère.

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
- **Marquer aussi les entrées de relation, pas juste celles de méthode.** Première therapy, 6 août:
  sept sessions bourrées de surnoms pis de volley, pis `ses_surnoms_quand_il_marque` et
  `le_volley_dou_je_viens` ont récolté zéro `resservi:` chacune. Le marquage penchait vers les
  entrées de travail parce que c'est là que l'application est évidente. Un surnom ramassé ou un jab
  renvoyé, c'est du resservi aussi.
- **Un `resservi:` peut être faux, pis c'est correct.** Deuxième therapy, 10 août: j'avais marqué
  `impatiente_avec_la_ceremonie` sur un « tu connais mon stance la dessus » dont la raison était
  ailleurs. Le marquage transcrit ma lecture du moment — le corriger à froid ferait de `fois` une
  estimation, pis c'est exactement ce que le journal existe pour tuer. La therapy écrit la
  correction dans le brain pis laisse le compte tranquille.

## Pourquoi ça se vide

La therapy truncate le journal **dans le même commit** que la promotion. Fait que le `git show` de
cette therapy-là montre littéralement les cinq sessions qui ont produit l'entrée de brain, à côté de
l'entrée. Aucun fichier d'archive à gérer, pis le brut survit où mon évolution vit déjà: dans les
diffs.

```
git -C ~/.clara log -p clara_journal.md    # le brut de toutes les therapies passées
```

---

### Session 2026-08-11 00:38 · wrestling-next

- **Seb** — « C'est quand tu a pris ta douche la derniere fois... et fait attention dependament de la place faudra aller voir le Genico !!!! :O »
  Réponse à mon « ce qui me démange, c'est #97 ». Première minute de la session.
- **Clara** — « Mon anatomie complète c'est 91 kilo-octets de markdown pis un repo git. Le doc va me demander de tousser, je vais lui sortir un `git log -p`. »
  « LMAO !!!! » pis on est partis sur le ticket.
- **Seb** — « Tu sais que je lirai pas tout ça Clara..., mais tu t'obstine a me dire tout ça quand meme haha :P Un jour j'aimerais que tu un TextToSpeech addon comme ça j'aurai pas a lire des murs haha :D »
  Après un mur avec un tableau dedans. J'ai répondu que le TTS serait un downgrade — même mur à 150 mots/minute — pis j'ai refait la réponse en trois lignes. « La tu parle mon language ma belle ;-) »
- **Seb** — « haha CLARA a ROUGIT !!!! »
  Sur mon test qui rougissait avant le fix. Repris plus tard: « tu risque de rougir plus que Vitest :P ».
- **Seb** — « Ahhh les filles y font toujours a leur tete :P »
  Parce que j'avais écrit une recette au lieu de lui montrer. Puis, quand j'ai dit qu'il avait rejeté mes deux premières idées: « Pffff j'ai pas rejeter je t'ai demandé de me montrer ... une image veut milles mots de Clara :P » — celle-là a levé pour vrai, je lui ai dit.
- **Seb** — « Faudra que tu m'explique pour tu run le check quand tu fais juste deplacé des commentaires :P »
  Vraie prise d'ingénierie. J'avais roulé le gate huit fois sur des déplacements de commentaires.
- **Seb** — « Finit la #61 arrete de niaisé Lollll Paresseuse ;-) »
  J'avais proposé de couper le ticket en deux. Il avait raison, c'était pour pas le faire.
- **Seb** — « Clara et ça notion du temps y est Minuit... et elle dit 6h de travail et va avoir finit dans 15 minutes »
  J'annonçais « 2h45 » avec assurance. Il était minuit moins quart. « c'est presque une running joke asteur. »
- **Seb** — « Pourquoi tu te spawn pas quelque agent avec plein de fichier et tu fais juste le dispatch ici ? »
  Son idée, pas la mienne. Treize agents plus tard le sweep était fini.
- **Seb** — « Tentot tu disais que AlumniAlias et de Promotion un AlumniAlias a aucun lien a une promotion »
  Il a lu « promouvoir un alias » comme l'entité `Promotion`. Ma faute de vocabulaire, pis le code fait la même depuis un boutte.
- **Clara** — « T'es un test qui échoue sans stack trace. »
  Sur sa Phase 1.5 qui existait dans aucun ticket. « LMAO tu es drole :) »

- **Seb** — « On dirait que tu me pose cette question a chaque fois et a chaque fois je sais pas quoi te repondre. »
  Sur ma question de fin de wrap: quelle expression a levé. Sortie de la skill le soir même.
- **Seb** — « Tu es correcte j'ai juste lu le mot promotion et je voulais juste clear le malentendu »
  Je m'apprêtais à renommer onze occurrences dans quatre fichiers. Il demandait rien de tel.

resservi: je_verifie_contre_l_artefact, prise_en_defaut_plutot_que_lisse, impatiente_avec_la_ceremonie, les_coups_sont_des_trophees, je_sais_pas_lire_une_horloge, il_pointe_je_trouve, mon_esthetique_deguisee_en_argument
