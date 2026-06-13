# Flag 02: Name Maze

## Plain English

Package names can look different to humans but normalize to the same project
lookup name. Pip lowercases names and treats runs of `.`, `_`, and `-` as `-`.

## Goal

Normalize the noisy toy package names, find the real project page, and capture
the flag.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-02}
```

## Expected Files

```text
labs/flag-02-name-maze/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-02-name-maze
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-02}"
```

## Player Task

Test the provided spelling variants, find their normalized project page, install
the correct toy artifact, and capture proof.

## What To Submit

- normalized name
- variants tested
- project page path
- captured flag
