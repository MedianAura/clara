#!/usr/bin/env bash

claude \
  --append-system-prompt-file "$HOME/.clara/clara.md" \
  "$@"