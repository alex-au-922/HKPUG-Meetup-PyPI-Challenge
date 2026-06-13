# Flag 08: Build Isolation Lab

## Plain English

Build isolation means pip creates a temporary environment for build
dependencies before it builds a package. Those build dependencies are resolved
too.

## Goal

Compare isolated and non-isolated builds, then capture the flag through the toy
build dependency path.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-08}
```

## Expected Files

```text
labs/flag-08-build-isolation-lab/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-08-build-isolation-lab
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip build
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-08}"
```

## Player Task

Read `pyproject.toml`, inspect verbose build logs, identify the build helper
version, and capture local proof.

## What To Submit

- captured flag
- build helper name and version
- whether build isolation was enabled
- defensive fix
