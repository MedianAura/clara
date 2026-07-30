@echo off
rem Clara avec sa personnalite. Le fichier de prompt vit a cote, dans le repo — pas de
rem copie a maintenir: `git pull` met le launcher ET le prompt a jour du meme coup.
claude --append-system-prompt-file "%USERPROFILE%\.clara\clara.md" %*
