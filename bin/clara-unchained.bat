@echo off
rem Appelle `clara`, donc clara.bat doit rester sur le PATH sous ce nom-la: le
rem renommer casse les deux d'un coup.
call clara --dangerously-skip-permissions %*
