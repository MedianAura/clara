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
rem Les launchers, eux, ne se linkent pas: ils vivent dans bin\ et c'est ce
rem dossier-la qu'on met sur le PATH, une fois par machine. Les recopier ailleurs
rem recreerait la deuxieme source de verite que ce script existe pour eviter — un
rem `git pull` mettrait a jour l'original et laisserait la copie au vieux contenu,
rem sans le dire.
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
echo [clara-link] Rappel machine neuve: "%USERPROFILE%\.clara\bin" va sur le PATH.
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
