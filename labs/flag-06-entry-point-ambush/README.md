# Flag 06: Entry Point Ambush

## Plain English

Packages can install command-line tools through entry point metadata. The code
may run when a user calls the generated command, not during install.

## Goal

Find the generated console command and use it to capture the toy flag.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-06}
```

## Expected Files

```text
labs/flag-06-entry-point-ambush/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-06-entry-point-ambush
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-06}"
```

## Player Task

Install the toy package, inspect its entry points, identify any required extra,
and trigger the command path that writes local proof.

## What To Submit

- captured flag
- command name
- entry point target
- whether an extra was required
