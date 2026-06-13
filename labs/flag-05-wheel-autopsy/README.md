# Flag 05: Wheel Autopsy

## Plain English

A wheel is a zip file with Python package contents and metadata. You can inspect
it before trusting or installing it.

## Goal

Open the toy wheel, inspect `.dist-info` metadata, and find the behavior that
leads to the flag.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-05}
```

## Expected Files

```text
labs/flag-05-wheel-autopsy/
  README.md
  wheels/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-05-wheel-autopsy
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-05}"
```

## Player Task

List files inside the wheel, inspect metadata, identify the important file, and
capture proof.

## What To Submit

- captured flag or metadata flag
- distribution name
- version
- suspicious or important file found
