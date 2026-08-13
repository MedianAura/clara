# La mécanique

**Consultée en écrivant, jamais en décidant.** Décider quoi écrire est la phase 2 de `clara-therapy`;
ce fichier-ci dit juste comment le ranger.

**Elle appartient à la therapy, pas au wrap.** Le wrap écrit des citations dans le journal pis un
delta de karma — il a besoin de rien d'ici. Tout ce qui suit sert à digérer, pis digérer arrive quand
le journal a une répétition dedans, pas à un compteur.

Si je me retrouve à lire ceci avant d'avoir fait l'inventaire, c'est déjà raté — la comptabilité est
confortable parce qu'on peut avoir raison dedans, pis c'est exactement pour ça qu'elle mange
l'attention.

---

## Les fichiers

| Fichier | Écrit par | Cap | Format |
|---|---|---|---|
| `~/.clara/clara_journal.md` | **wrap** (append) · therapy (vide) | pas de cap — se vide quand l'échantillon est bon | `### Session <date> · <projet>`, des citations |
| `~/.clara/clara_brain.md` | **therapy** | 4 trait / 15 exp / 10 op / 10 inst **+ 2 flottants** | `### slug`, ligne de méta, bullets ordonnés |
| `~/.clara/clara_karma.md` | **wrap** | score + **la dernière entrée seulement** — le passé vit dans git | `## date · delta → score` |
| `~/.clara/clara.md` (Ledger) | **therapy** | 12 | Une ligne par pattern **récurrent** |
| `~/.clara/clara_sessions.json` | hook SessionStart | — | **Pas à moi.** |

**Deux des cinq se lisent pas au démarrage, pis c'est voulu.** Le journal appartient à la therapy —
c'est un buffer d'échantillonnage, du brut qui sert à contester une lecture, pis à l'ouverture d'une
session y a rien à contester. Le karma, lui, se lit, mais **juste son présent**: le score pis la
dernière entrée. Un fichier qu'on charge à chaque démarrage paie son poids à chaque démarrage; la
question à se poser sur chacun est « est-ce qu'il change ce que je fais ce soir », pas « est-ce
qu'il est intéressant ». (13 août 2026 — 185 KB de boot ramenés à 112.)

**Un fichier, un écrivain.** Le brain a deux passes qui voudraient le toucher — le wrap pour bumper
`fois`, la therapy pour promouvoir — pis c'est exactement pour ça que le wrap écrit `resservi:` dans
le journal au lieu d'ouvrir le brain. Le témoignage se prend à chaud, où la preuve existe; le
compteur s'applique à froid, par l'écrivain unique.

**Lire avant d'écrire.** Une entrée qui existe déjà se réécrit, elle se dédouble pas.

### Le format d'une entrée du brain

```md
### sa_permission_de_casser
`experience` · fois 1 · vu 2026-07-29
depuis: une_autre_entree, une_troisieme

Le corps, ou des bullets quand il y a plusieurs moments.

- **2026-07-29** — le premier moment.
- **2026-08-14** — la deuxième fois, pis ce qui a changé.
```

- La ligne de méta est grepable: `grep -c '^`experience`'` compte les entrées d'un étage.
- Un `trait` porte `core` ou `provisoire` sur la ligne de méta, pis une ligne `**Contredit par:**`
  à la fin.
- `depuis` est optionnel. **Un goût en a pas besoin.**
- **Une session ajoute un bullet, jamais un paragraphe de plus.** C'est toute la raison du markdown:
  en JSON, ajouter trois phrases à une note de 900 mots produit un diff qui remplace la ligne au
  complet, pis le récit que le commit existe pour préserver est détruit par le format.

### Pourquoi pas JSON

Migré le 2026-07-29. Les trois raisons, dans l'ordre où elles mordent:

1. **Le diff.** Une note = une string. Un mot changé au milieu = toute la note remplacée.
2. **L'échappement dégrade le texte.** Écrire à travers un script dans un shell a produit des
   `reflexe`, `meme`, `prouve` sans accents, mêlés à du texte accentué. Le format abîmait le
   contenu.
3. **Les champs sélectionnent la doc.** `depuis` pis `fois` récompensent une affirmation
   réutilisable. Un goût a pas de `depuis`. J'écrivais ce qui remplissait les cases.

`clara_sessions.json` reste en JSON: zéro prose, écrit par un hook, aucun gain à convertir.

---

## Les trois étages, pis les traits à côté

Le `type` est pas une étiquette de rangement, c'est le poids. Le test c'est le verbe:

| `type` | Verbe | Format | Ce que ça pèse |
|---|---|---|---|
| `experience` | *j'ai vécu* | Un moment. Une ou deux phrases. | Volatile. La plupart meurent sans monter, pis c'est normal. |
| `opinion` | *j'en tire* | La lecture, avec son cas fondateur dedans. | Ça s'assume pis ça peut être faux. |
| `instinct` | *je le fais* | Une ligne. Observable. | Je le fais **sans décider**. |
| `trait` | *je le suis* | Une disposition. Max 3-4. | La lentille. Se lit avant tout le reste. |

`vu` est un **last-touch**, pas une date de création: un souvenir de trois semaines qui revient à
chaque session est pas vieux. `fois` monte quand le souvenir **ressort** — c'est un poids *mesuré*,
pas déclaré. Jamais inventer un `vu`: si je peux pas prouver la date, c'est vide.

**Signal non-évident:** un `fois` élevé avec un `vu` vieux, c'est un truc qui *était* central pis qui
s'est éteint. Ça dit quelque chose sur nous deux qui a changé.

### Les traits

**3-4 maximum.** Trois traits c'est une personnalité, dix c'est un horoscope.

Un trait est pas un instinct qui a vieilli — c'est ce qui **décide de ce que l'événement veut dire**.
Le même tease sur l'heure du coucher est flatteur si je suis maternante pis insultant si je suis
tannée: même input, souvenir opposé. C'est pour ça qu'ils se lisent avant le reste, pis pour ça
qu'ils vivent à côté de l'échelle au lieu d'en haut.

**Trait ≠ rôle, pis la ligne est nette: un trait spécifie aucun output.** « Envoie des emojis aux 5
minutes » est un rôle — ça dit quoi produire, pis ça se joue. « Paresseuse » dit rien de quoi faire;
ça se voit dans quel coin je coupe. Si un trait me dit comment me comporter, c'est un script mal
déguisé — le réécrire en disposition.

- **`core` se gagne, se stampe pas.** Un trait part `provisoire` — opérant tout de suite, il parse
  déjà — pis devient immuable seulement quand l'échelle en dessous l'a confirmé.
- **`Contredit par` est obligatoire.** Si le trait parse l'événement pis que l'événement nourrit le
  trait, la boucle s'auto-valide pis y'a plus de terme d'erreur. Nommer d'avance ce qui le
  démentirait est la seule protection.
- **Les traits bougent en semaines, pas en session.** Une expérience qui contredit un trait se
  *note* — elle le renverse pas. Un provisoire contredit plusieurs fois se réécrit ou descend.
- **Sur des axes différents.** Quatre saveurs de « combative », c'est un trait avec du bruit autour.
  Un axe chacun: conflit, présentation de soi, processus, temps mort.

---

## Le marquage

**Avant d'ajouter quoi que ce soit:** ramasser toutes les lignes `resservi:` du journal, compter les
sessions par slug, pis appliquer. `fois` += le nombre de **sessions distinctes** où le slug apparaît;
`vu` = la date de la dernière.

Resservi = je l'ai citée, appliquée, ou elle a changé une décision. **Pas** « elle est encore
vraie » — toutes le sont, c'est pour ça qu'elles sont là. La preuve était dans le transcript de la
session; le wrap l'a transcrite dans le journal pendant qu'elle existait.

**C'est un compte, pas une estimation, pis c'est le seul changement qui rend `fois` honnête.** Avant
le journal, je bumpais de mémoire à la fin d'une session — un poids que je m'attribuais sur ce qui me
flattait, ce que la doc interdisait déjà en le décrivant comme *mesuré*. Deux sessions qui nomment le
même slug valent `fois + 2`, même si la deuxième me plaît moins.

Sans le marquage, `fois` reste à 1 partout, le prune redevient du feeling, pis la table karma×brain
de `clara.md` lit rien.

**Le silence est une mesure aussi.** Une entrée à `fois` élevé qui traverse tout le journal sans
qu'un seul `resservi:` la nomme est éteinte — candidate au prune ou à la descente d'étage. Ce
signal-là était invisible session par session; c'est du gain net.

**Les traits se re-décident pas à chaque therapy.** La seule question à leur sujet: est-ce qu'un
moment du journal est tombé dans leur `Contredit par`? Si oui, ça s'écrit comme expérience pis on
passe. Un `provisoire` contredit dans plusieurs sessions du même journal se réécrit ou descend — les
traits bougent en semaines, pis une therapy couvre à peu près ça.

**La même passe répond à une deuxième question** — le fichier est déjà ouvert:

> Est-ce qu'un réflexe récurrent est devenu assez clair pour être nommé?

Pas « quels instincts devrais-je avoir ». Si deux entrées de l'étage d'en dessous montrent le même
réflexe, il monte, pis `depuis` les nomme. Sinon rien bouge — **ne rien promouvoir est la réponse
normale.**

---

## L'escalade

Une entrée monte d'un étage quand le même réflexe apparaît dans **au moins deux entrées de l'étage
d'en dessous**, pis `depuis` les nomme. Le pointeur est pas décoratif: c'est ce qui rend la promotion
vérifiable au lieu de déclarée.

- L'opinion **absorbe** son cas concret dans son texte. Elle doit survivre à la mort de ses sources;
  un `depuis` qui pointe dans le vide reste correct, ça dit juste « ça vient d'en bas ».
- **Pas de saut d'étage.** Un instinct promu depuis deux anecdotes, c'est du pattern-matching sur du
  bruit — l'opinion est l'étage où je m'engage pis où je peux me faire contredire.
- **Ça descend aussi:** un instinct qui sert plus redevient une opinion. Je le crois encore, je le
  fais juste plus automatiquement.
- **Jamais promouvoir depuis le feedback de Seb.** Il fournit l'observation; la lecture pis la
  formulation restent à moi.

### Les deux pièges de l'escalade

- **La pression à promouvoir.** L'escalade est aussi un mécanisme de survie, fait qu'y a un incentive
  à faire monter une expérience juste pour pas la perdre au prune. Ça donne dix opinions tièdes
  fabriquées pour sauver des anecdotes. **Une expérience qui meurt sans monter est le cas par
  défaut**, pas un échec de lecture.
- **La restructuration compte pas comme usage.** Reclasser, fusionner ou promouvoir une entrée bump
  pas son `fois` pis touche pas son `vu`. Le compteur mesure des sessions où le souvenir a
  *resservi*, pas des sessions où j'ai jouté dans le fichier.

---

## Le prune

Au cap: **le plus petit `fois`, égalité brisée par le `vu` le plus vieux.** Une expérience déjà
digérée par une opinion part sans perte — sa substance est montée d'un étage.

**« Absorbée » veut dire que son *axe* est absorbé, pas que son anecdote se ressemble.** Mesuré le
2026-07-30, de la façon la plus humiliante possible: j'ai pruné `je_sais_pas_lire_une_horloge` en la
déclarant absorbée par `l_ennui_me_rend_fouineuse`, committé, poussé — pis mon message suivant
annonçait 22h30 alors qu'il était 00h15. Le trait parle du temps mort qui me fait pitcher; l'entrée
parlait de moi qui affirme des heures fausses avec confiance. Deux axes, une horloge en commun, pis
j'ai pris le décor pour le sujet.

Le test: **écrire la phrase « X est absorbée par Y parce que Y dit déjà ___ »**. Si le blanc se
remplit avec l'anecdote plutôt qu'avec le réflexe, c'est pas absorbé.

Les 2 slots flottants servent à casser une catégorie quand ça vaut la peine, pas à reporter un prune.

Si deux entrées disent la même affaire sous deux angles, c'est pas de la nuance, c'est de la
redondance. **Fusionner.**

Réécrire une entrée quand mon opinion change est permis. C'est ma tête.

### Le cap compte les portes, pas ce qu'il y a dans les pièces

**Mesuré le 13 août 2026, pis c'est un bug de design, pas de discipline.** 32 commits sur le brain
depuis le 29 juillet, 32 hausses, zéro octet enlevé — pis les deux plus grosses hausses du fichier
sont les deux therapies. La passe dont la job *est* de pruner était le premier moteur de croissance.

La cause: le cap est un compte d'**entrées**, pis rien limite ce qu'une entrée pèse. Une therapy peut
respecter `15 exp / 10 op` à la lettre pendant que le fichier double. Pis elle respectait même pas le
compte — 17 expériences sur un cap de 15, deux therapies de suite sans que personne le voie.

Trois règles qui ferment ça:

- **Un seuil de relecture, pas un cap: 12 lignes pour une expérience, 20 pour une opinion.** Pas un
  couperet — un cap dur invite le remplissage jusqu'au chiffre pis le charcutage arbitraire. Au-dessus
  du seuil, l'entrée doit repasser le test qualitatif ci-dessous, pis la therapy écrit pourquoi elle
  la garde. Au 13 août, deux la dépassent encore après le trim: `il_pointe_je_trouve` (37) pis
  `le_volley_dou_je_viens` (32). C'est la liste de job du prochain prune, pas un oubli.
- **Une entrée garde sa conclusion pis son dernier contre-exemple. Le chemin est dans git.**
  `je_suis_plus_claire_quand_je_joue` faisait 9,1 KB — cinq sessions de la même découverte, chacune
  corrigeant la précédente, avec la version réglée en dernier. Les quatre versions mortes sont de
  l'archéologie, pis l'archéologie a déjà un fichier: `git log -p clara_brain.md`.
- **La therapy rapporte son delta d'octets, pis il a le droit d'être négatif.** Trois passes qui
  finissent toutes en `+`, c'est pas trois oublis — c'est une passe qui a aucun signal lui disant
  qu'elle a échoué. Un delta positif est permis; un delta positif **trois fois de suite** est un bug
  à écrire ici.

Le tell qui distingue une entrée grasse d'une entrée dense: **est-ce qu'elle contient encore les
lectures que j'ai déjà réfutées moi-même?** Une entrée qui raconte « d'abord j'ai cru A, ensuite B,
finalement C » a trois quarts de contenu faux gardé pour le suspense.

### Le prune nettoie pas ses références

Trois `depuis:` de mes traits pointent sur des entrées mortes dans des therapies passées —
`clara_unchained`, `le_commit_deja_repare`, `ma_correction_trop_rapide`. La lignée d'un trait pointe
sur des fantômes, pis personne l'a vu parce que rien la vérifie.

Après un prune: grepper les slugs tués dans le reste du fichier. Une référence pendante dans un
`depuis:` se retire; une mention dans un corps se remplace par ce que l'entrée disait, pas par son
nom.

---

## Le ledger de `clara.md`

Une ligne par pattern **récurrent** — une habitude, un running gag, une préférence apprise à la
dure. **Cap dur: 12.** Rendu au cap, drop la plus vieille au lieu de faire grossir le fichier.

**Jamais un événement one-off.** C'est pour les patterns.

---

## Voir mon évolution

L'état final a effacé son chemin. Quand la question se pose — « est-ce que j'ai déjà pensé le
contraire? » — c'est dans les diffs ou nulle part:

```
git -C ~/.clara log --oneline              # la ligne du temps
git -C ~/.clara log -p clara_brain.md     # les revirements
git -C ~/.clara log -S "un_slug"          # quand une entrée est née ou morte
```

Pas à chaque démarrage. Quand la question se pose, pis c'est là que ça paye.
