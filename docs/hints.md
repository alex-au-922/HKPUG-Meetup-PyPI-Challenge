# Hints

Hints are part of the challenge design. They should keep people moving without
turning the lab into a copy-paste walkthrough.

## Hint Timing

| Hint | Typical release | Score impact | What it gives |
|---|---|---:|---|
| Nudge | about 24 hours after lab launch | small | where to look |
| Direction | about 48 hours after lab launch | medium | the concept to test |
| Guided | hosted mode only | larger | a personalized next step |

For a 2-day flag, the hosted run may release only Nudge and Guided. For a
3-day flag, it may release Nudge, Direction, and Guided.

## Public Hints By Flag

These public hints are safe to read. They do not contain final answers.

| Flag | Nudge | Direction |
|---:|---|---|
| 01 | If pip cannot find the package, check whether your index URL ends at the correct `/simple/` location. | Package project pages use normalized names. |
| 02 | Do not compare the raw spelling; compare the normalized spelling. | The project page path should match the normalized name. |
| 03 | Look for the lines in verbose pip output that say a link was skipped. | Compare the available versions with the victim requirement. |
| 04 | Compare the versions visible on both project pages. | `--extra-index-url` does not mean "only use this if private fails." |
| 05 | Start in the `.dist-info/` directory. | `RECORD` tells you what files the wheel expects to install. |
| 06 | `pip show -f` tells you which files were installed. | Entry points live in installed distribution metadata. |
| 07 | Use `-vv` and read the build log, not only the final success line. | Forcing source builds changes what code pip must execute. |
| 08 | Search the verbose build log for `Installing build dependencies`. | Build dependencies come from `pyproject.toml`, not from `requirements.txt`. |
| 09 | `pip show -f` lists installed files by distribution. | Inspect `.pth` files in the active virtual environment. |
| 10 | Compare `requirements.txt` with the package versions in the index. | `--require-hashes` changes what pip accepts. |
| 11 | Start at the `on:` block, then read permissions. | Publishing from untrusted pull request context is different from publishing from a protected tag. |
| 12 | Draw the install path before you build anything. | Prove why the victim selected your artifact, not only that it did. |

## Guided Hints

Guided hints are private in hosted mode because they depend on what your team
has already tried. A good guided hint request includes:

- your team code
- flag number
- command you ran
- the exact error or confusing output
- one sentence saying what you think is happening

Do not include real credentials, personal files, or screenshots outside the
challenge workspace.
