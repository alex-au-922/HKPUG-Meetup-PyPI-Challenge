# Flag 05: Wheel Autopsy

!!! danger "Challenge boundary"
    **Inspect only the toy wheel files from this lab.**

    Do not run unknown real packages just to see what they do.

## Plain English

A wheel is a package file ending in `.whl`. It is basically a zip file with a
special layout. You can open it before installing it.

This lab teaches you that package review is not magic. You can inspect metadata,
installed files, entry points, and hashes with ordinary tools.

## Story

A wheel was installed in the victim environment. Something about it leads to the
flag. Before trusting it, you need to open the wheel and read what it contains.

## What You Are Trying To Control

You are trying to inspect an artifact before relying on it.

Look for:

- `METADATA`: name, version, dependencies, extras
- `WHEEL`: wheel generator and compatibility
- `RECORD`: installed file list and hashes
- package modules
- entry point metadata

## Files You Will Get

```text
labs/flag-05-wheel-autopsy/
  wheels/
  victim/
  artifacts/
```

## First Checks

```bash
cd labs/flag-05-wheel-autopsy
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-05}"
```

Open a wheel without installing it:

```bash
python - <<'PY'
from pathlib import Path
from zipfile import ZipFile

wheel = next(Path("wheels").glob("*.whl"))
with ZipFile(wheel) as zf:
    for name in zf.namelist():
        print(name)
PY
```

You can extract it to a temporary folder if reading inside the zip is annoying.

## Your Task

Find the metadata or installed file behavior that leads to the flag. Then prove
the installed distribution name and version.

The final mile is yours: this page tells you which files matter, but not which
one contains the key clue.

## What To Submit

- captured flag or metadata flag
- distribution name
- version
- one suspicious or important file found

## Hints

1. Nudge: start in the `.dist-info/` directory.
2. Direction: `RECORD` tells you what files the wheel expects to install.
3. Guided: in hosted mode, send the wheel file list before asking.

## Defense Notes

Artifact review is a useful habit. In real workflows, combine review with
trusted sources, reproducible builds, signing or provenance where available, and
hash-checked installs.
