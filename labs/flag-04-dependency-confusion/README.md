# Flag 04: Dependency Confusion

## Plain English

If pip can see a private-looking package and a public-looking package with the
same name, the resolver may choose the wrong one. This lab uses only simulated
toy indexes.

## Goal

Make the simulated public package win, prove which index supplied it, and then
describe the defense.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-04}
```

## Expected Files

```text
labs/flag-04-dependency-confusion/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-04-dependency-confusion
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-04}"
```

## Player Task

Inspect both toy indexes, run the victim install, identify the winning version,
and capture local proof.

## What To Submit

- captured flag
- selected package version
- which index won
- defensive fix
