# Flag 12: Capstone Incident

## Plain English

The capstone is a complete toy incident. You create a challenge-owned package
artifact, make the vulnerable victim select it, capture the flag, and then write
the defense.

## Goal

Combine earlier ideas: index layout, name normalization, resolver behavior,
artifact metadata, runtime proof, and defensive packaging policy.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-12}
```

## Expected Files

```text
labs/flag-12-capstone-incident/
  README.md
  indexes/
  packages-src/
  victim/
  incident-report/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-12-capstone-incident
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip build
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-12}"
```

## Player Task

Map the victim install path, build the controlled toy package, make the victim
select it, capture proof, and write the incident report.

## What To Submit

- captured flag
- package name and version used
- index or artifact path that won
- incident timeline
- defensive patch
