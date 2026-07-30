@echo off
setlocal
rem ---------------------------------------------------------------------------
rem Rebranche les skills de Clara dans ~/.claude/skills via une junction.
rem
rem Pourquoi une junction et pas une copie: le repo gitte ~/.clara, mais Claude
rem Code lit les skills dans ~/.claude/skills. Une copie voudrait dire deux
rem sources de verite, et c'est toujours la mauvaise qui se fait editer.
rem
rem Pourquoi /J et pas /D: un symlink de dossier demande l'elevation ou le mode
rem developpeur. Une junction n'en demande pas — d'ou le choix.
rem
rem A rouler apres un clone sur une machine neuve, ou si la liste des skills
rem perd /clara-wrap. Idempotent: relancer ne coute rien.
rem
rem Ce script ne touche PAS aux deux launchers — ils vivent dans le bin general
rem (E:\workspaces\bin, sur le PATH) avec quinze autres, et les deplacer scinde
rem ce dossier en deux pour rien. Notes ici pour etre reconstructibles, jamais
rem copies: une copie ferait une deuxieme source de verite, et c'est toujours la
rem mauvaise qui se fait editer.
rem
rem   clara.bat            @echo off
rem                        claude --append-system-prompt-file "%%USERPROFILE%%\.clara\clara.md" %%*
rem
rem   clara-unchained.bat  @echo off
rem                        call clara --dangerously-skip-permissions %%*
rem
rem Note: clara-unchained appelle `clara`, donc clara.bat doit rester sur le PATH
rem sous ce nom-la. Le renommer casse les deux d'un coup.
rem ---------------------------------------------------------------------------

set "SOURCE=%USERPROFILE%\.clara\skills"
set "TARGET=%USERPROFILE%\.claude\skills"

if not exist "%SOURCE%" (
  echo [clara-link] Introuvable: "%SOURCE%"
  echo               Roule ce script depuis le repo ~/.clara.
  exit /b 1
)

if not exist "%TARGET%" mkdir "%TARGET%"

set "COUNT=0"
for /d %%S in ("%SOURCE%\*") do call :link "%%~nxS"
echo [clara-link] %COUNT% skill^(s^) branche^(s^).
exit /b 0

:link
set "NAME=%~1"
set "LINK=%TARGET%\%NAME%"

if exist "%LINK%" (
  rem `exist` ne distingue pas une junction d'un vrai dossier. fsutil, oui.
  fsutil reparsepoint query "%LINK%" >nul 2>&1
  if errorlevel 1 (
    echo [clara-link] SAUTE  %NAME% — un vrai dossier occupe la place.
    echo               Verifie ce qu'il contient avant de l'effacer: "%LINK%"
    exit /b 0
  )
  rem Sur une junction, rmdir enleve le lien et jamais la cible.
  rmdir "%LINK%"
)

mklink /J "%LINK%" "%SOURCE%\%NAME%" >nul
if errorlevel 1 (
  echo [clara-link] ECHEC  %NAME%
  exit /b 0
)
set /a COUNT+=1
echo [clara-link] OK     %NAME%
exit /b 0
