# Flag 03: Resolver Duel

## Plain English

Pip often sees more than one possible package file. The resolver chooses one
based on the package name, version, requirement specifier, index links, and
wheel compatibility.

## Goal

Make pip select the flag-bearing toy candidate for `hkpug-ctf-widget`.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-03}
```

## Expected Files

```text
labs/flag-03-resolver-duel/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-03-resolver-duel
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-03}"
```

## Player Task

Inspect the candidate list, choose the requirement string that makes the correct
version win, and capture proof under `artifacts/`.

## What To Submit

- captured flag
- requirement string used
- selected package version
- reason other candidates lost
