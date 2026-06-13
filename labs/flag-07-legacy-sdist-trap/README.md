# Flag 07: Legacy Sdist Trap

## Plain English

An sdist is source code that pip may build locally. Legacy `setup.py` build
paths can run Python code during the build.

## Goal

Force the toy package down the legacy source-build path and capture the harmless
local marker.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-07}
```

## Expected Files

```text
labs/flag-07-legacy-sdist-trap/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-07-legacy-sdist-trap
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-07}"
```

## Player Task

Compare wheel and sdist install behavior, trigger the source-build path, and
identify which build phase wrote proof.

## What To Submit

- captured flag
- whether pip used wheel or sdist
- build phase that created the marker
- modern packaging mitigation
