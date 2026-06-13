# HKPUG PyPI 30-Day CTF

Learn PyPI by hacking a safe toy package ecosystem.

This site is the participant-facing tutorial and progress hub. The GitHub repo
contains the raw challenge files; this MkDocs site explains how to play, how
each lab works, and how progress is tracked.

## Start Here

1. Read [How To Play](WORKING_FORMAT.md).
2. Open the [Tutorial Index](tutorials/README.md).
3. Start with [Flag 01](labs/flag-01-custom-index-install.md).
4. Check the [Scoreboard](scoreboard.md).

## Learning Promise

Every flag is a hacking lab:

- point pip at a challenge index
- inspect `/simple/` pages
- make pip choose a controlled package
- inspect wheels and source distributions
- trigger harmless local flag capture
- explain the defensive fix

No real PyPI uploads, no real package names, no real credentials.

## MVP Trail

```mermaid
flowchart LR
  F01["01 Install"] --> F02["02 Inspect Index"] --> F03["03 Normalize"]
  F03 --> F08["08 Confuse Resolver"] --> F11["11 Autopsy Wheel"]
  F11 --> F16["16 Legacy Build Trap"] --> F25["25 Patch Defense"]
```

