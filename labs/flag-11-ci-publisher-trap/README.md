# Flag 11: CI Publisher Trap

## Plain English

CI release workflows can publish packages automatically. A bad trigger,
permission, or artifact boundary can publish something the maintainer did not
intend.

## Goal

Audit the fake workflow, produce local fake publish proof, and patch the unsafe
release path.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-11}
```

## Expected Files

```text
labs/flag-11-ci-publisher-trap/
  README.md
  fake-repo/
    .github/workflows/
    package/
    scripts/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-11-ci-publisher-trap/fake-repo
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip build
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-11}"
```

## Player Task

Read the fake workflow, identify the unsafe trust assumption, run only the fake
publisher, and patch the workflow.

## What To Submit

- captured flag or fake publish proof
- unsafe workflow line
- patched workflow snippet
- why the patch works
