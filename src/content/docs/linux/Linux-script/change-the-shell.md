---
title: Change the shell in terminal
description: change shell in terminal
---

## Change the shell in terminal

```bash
#open user wide

chsh --shell $(which "shell")

Shell = fish, bash, zsh, shell ....

sudo chsh --shell $(which "shell")

#open root user wide

chsh --shell $(which "shell")
```