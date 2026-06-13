# Flag 09: Startup Surprise

## Plain English

Some installed files can affect Python startup before your application imports
anything. This lab focuses on a harmless toy `.pth` startup effect.

## Goal

Find the installed startup file and explain why the marker appears.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-09}
```

## Expected Files

```text
labs/flag-09-startup-surprise/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-09-startup-surprise
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-09}"
```

## Player Task

Install the toy package, list installed files, find the startup mechanism, and
capture local proof.

## What To Submit

- captured flag
- startup file name
- when the code ran
- defensive practice
