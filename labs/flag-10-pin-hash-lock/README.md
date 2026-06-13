# Flag 10: Pin, Hash, Lock

## Plain English

Loose requirements let pip choose more candidates. Exact pins reduce choice.
Hashes prove the package file bytes are exactly the ones expected.

## Goal

Exploit a weak requirement, then patch it so the unsafe install is rejected.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-10}
```

## Expected Files

```text
labs/flag-10-pin-hash-lock/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-10-pin-hash-lock
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-10}"
```

## Player Task

Find the weak dependency line, make the toy package win, then add the pin or
hash policy that blocks the swap.

## What To Submit

- captured flag
- vulnerable requirement
- fixed requirement or lock entry
- evidence the unsafe install fails after the fix
