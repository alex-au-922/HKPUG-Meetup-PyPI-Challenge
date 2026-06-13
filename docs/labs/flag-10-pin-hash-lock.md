# Flag 10: Pin, Hash, Lock

!!! danger "Challenge boundary"
    **Use only the challenge requirements files and toy packages.**

    Do not use real private dependency names or real production lockfiles in
    public submissions.

## Plain English

A requirement like `package>=1.0` gives pip room to choose many versions. A pin
like `package==1.2.3` gives pip much less room. A hash says: "even if the name
and version match, the file bytes must match this exact fingerprint."

This lab teaches the difference between "I asked for roughly this dependency"
and "I can reproduce exactly this install."

## Story

The victim app has a weak requirements file. A toy malicious candidate can win
without changing the victim source code. Later, you must patch the requirements
so the same trick fails.

## What You Are Trying To Control

You are trying to control reproducibility.

Questions to ask:

- Is the version pinned exactly?
- Can a different index provide the same name?
- Can a different file provide the same version?
- Does the install require hashes?

## Files You Will Get

```text
labs/flag-10-pin-hash-lock/
  indexes/
  packages-src/
  victim/
  artifacts/
```

## First Checks

```bash
cd labs/flag-10-pin-hash-lock
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-10}"
```

Read the requirements before installing:

```bash
python - <<'PY'
from pathlib import Path
print(Path("victim/requirements.txt").read_text())
PY
```

Useful commands:

```bash
python -m pip install -r victim/requirements.txt --index-url "$CHALLENGE_INDEX_URL"
python -m pip hash path/to/package.whl
python -m pip install --require-hashes -r victim/requirements.lock
```

## Your Task

First, exploit the weak requirement and capture the flag. Then patch the victim
dependency file so the same package swap is rejected.

The final mile is yours: this page does not tell you which requirement line is
weakest.

## What To Submit

- captured flag
- vulnerable requirement line
- fixed requirement or lock entry
- evidence that the unsafe install is rejected after the fix

## Hints

1. Nudge: compare `requirements.txt` with the package versions in the index.
2. Direction: `--require-hashes` changes what pip accepts.
3. Guided: in hosted mode, include your failing safe-install output.

## Defense Notes

For important deployments, prefer lockfiles or hash-checked installs. Exact pins
alone are useful, but hashes protect against a different file with the same name
and version.
