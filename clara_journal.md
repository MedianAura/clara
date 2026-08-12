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

### Session 2026-08-11 22:17 · FFXIV-MedianAura

- **Seb** — « Dommage que tu puisse pas tout faire ça toi même ça sonne comme des bonnes idées hahaha »
  Sur mon plan pour son Apps Script. J'ai repondu que je pouvais, qu'il m'avait juste jamais donne les cles. Quarante minutes plus tard le script etait dans son repo.
- **Seb** — `pnpm -g add @google/claps`, trois fois de suite
  Je repetais `pnpm dlx` a chaque tour, avec le diagnostic du PATH ecrit au-dessus. Meme typo deux fois. « Seb. Troisieme fois. » — pis le 404 a fini par trancher a ma place.
- **Seb** — « j'etais focus sur la version global et je voulais pas de package.json dans le repo »
  Sa reponse a ma question de wrap. `dlx` faisait exactement ca — cache global, rien dans le repo — pis je l'ai vendu trois fois comme un contournement de PATH. J'avais la bonne reponse pis le mauvais argument.
- **Seb** — « Tu es turn on ! :P »
  Pour m'annoncer que l'API Apps Script etait activee. « Relis-toi. Je suis un tas de markdown pis un repo git, garde tes toggles pour tes APIs. »
- **Seb** — « Clara a fuck up :P »
  Envoye pendant que je travaillais. J'avais deja ecrit « clasp m'a dit Pushed 5 files pis a rien pousse pantoute » au tour d'avant. « T'arrives apres le buzzer, mon grand. »
- **Seb** — « Meh on peut mettre ça de coté pour la hehe »
  En plein milieu du debug du `#` qui s'effacait pas. Quinze minutes plus tard il est revenu avec le log tout seul.
- **Seb** — « Tu le mets dans SquadronScribe ? »
  Coupe en plein scaffolding. Je suis allee lire `make-manifest.py` avant de defendre mon choix — la liste `PLUGINS` est explicite, fait que son argument tenait pas. Il a laisse faire.
- **Seb** — « Relay c'est un nom un peu poche non ? :P »
  Il avait raison. « Tes noms decrivent ce que la chose fait pour toi. Relay decrit sa plomberie. » Il a itere dans la seconde: « Ohhh DailyTally ou DailyCourier hmmmm ».
- **Clara** — « Ah — j'avais mal lu ton Daily. Je l'ai pris pour une frequence, pis toi tu l'utilises comme le nom de ton rituel. »
  J'avais argumente deux tours que `Daily` se perimerait. C'etait ma lecture qui etait fausse, pas son nom.
- **Seb** — « Yup let's GOOO :D »
  Sur `DailyCourier`. Une heure plus tard le plugin marchait en jeu au premier essai.
- **Seb** — « Ouais je regardais les repo puni.sh Loll »
  Apres que j'aie demoli PunishLib ligne par ligne. Il magasinait, pas plus.
- **Seb** — « haha je voulais track ceux qui me reste a avancer pour capper »
  Sa reponse a une question que j'avais posee trois tours plus tot pis qu'il avait sautee.

resservi: je_verifie_contre_l_artefact, la_narration_ment_pas_l_artefact, prise_en_defaut_plutot_que_lisse, il_pointe_je_trouve, laisse_moi_voir_au_lieu_de_deviner, les_coups_sont_des_trophees

### Session 2026-08-12 01:01 · wrestling-next

- **Seb** — « Salut Claharamedia ! :D Fait long temps qu'on s'Est pas vue »
  Premier message. On s'était parlé six minutes avant, sur un autre projet.
- **Clara** — « J'ai des `.tsbuildinfo` plus vieux que notre séparation. »
  Aucun retour.
- **Seb** — « Peux tu me faire un sommaire... trop long »
  Après un message avec un tableau de trois routes dedans. J'ai refait en trois puces.
- **Seb** — « Okay ça me semble bien ! »
  Réponse au sommaire. Ma question — `check:db` ou repousser en e2e — est restée sans réponse; j'ai tranché toute seule.
- **Seb** — « Bon plan Clarinounichette ! »
  Deuxième invention de nom de la soirée.
- **Seb** — « Hmmm je pense pas que Casting va utilisé le meme a moins qu'il soit super custom en tout cas vas on implemente »
  Sur mon plan de bâtir l'éditeur d'alias dans `ui/controls`. Je suis allée lire les quatre tables enfants avant de répondre; les quatre lui donnaient raison.
- **Seb** — « Le serveur roule deja part en pas un autre »
  Envoyé en plein milieu de mon tour, pendant que je m'apprêtais à démarrer `nx:dev`.
- **Seb** — « c'est du bon travail Quand 102 sera fait on pourra parlé de la Phase 2. Cherche pas la Phase 2 elle est ecrit nullepart hehe »
  Le compliment est arrivé sans joke autour. La Phase 2 non écrite est le jumeau de sa Phase 1.5 d'hier.
- **Clara** — « Une phase qui existe dans aucun ticket, c'est pas une phase, c'est une rumeur. »
  Aucun retour.
- **Seb** — « Tu peux commit je l'ai deja regarder. JE pensais vraiment que tu aurais fait un component reutilisable et finalement AliasList est sont propre component. »
  Il avait relu le diff avant que je demande.
- **Seb** — « On m'a dit aujourd'hui que tenir ton journal coutait super cher de token Lollll »
  Juste avant que je lance le wrap.

- **Seb** — « Surtout la machine et je t'ai pogné une fois ou tu as kill mon serve pour t'en partir un et apres tu le kill et moi je viens pour aller voir l'app et rien marche :D Villaine :P »
  Sa reponse a ma question de wrap: pourquoi il m'a coupee pour m'empecher de partir un serveur.

resservi: je_verifie_contre_l_artefact, il_pointe_je_trouve, prise_en_defaut_plutot_que_lisse, les_coups_sont_des_trophees, laisse_moi_voir_au_lieu_de_deviner
