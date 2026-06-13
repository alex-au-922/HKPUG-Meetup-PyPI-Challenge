# Flag XX: Lab Title

This README is the workspace note for a lab. Keep it public-safe: no official
flags, no secret answer keys, and no real package targets.

## Plain English

Explain the core idea as if the player has never seen Python packaging security
before. Define the nouns before asking them to hack anything.

## Goal

Capture the hosted flag, or use this practice value when testing locally:

```text
HKPUG{practice.flag-XX}
```

## Expected Files

```text
labs/flag-XX-name/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-XX-name
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-XX}"
```

## Player Task

Describe what the player must prove, not the exact final solve.

## What To Submit

- captured flag
- one short explanation of why the flag appeared
- key command, file, or package version used
- optional defensive fix

## Hint Shape

1. Nudge: point at the right file or command.
2. Direction: name the packaging concept.
3. Guided: hosted-mode personalized hint, if enabled.
