# Participant Working Format

This page explains how participants should work through the challenge.

## The Daily Loop

Each flag follows the same shape:

1. read the scenario
2. run the setup command
3. inspect or modify the toy index/package
4. make the controlled package capture the fake flag
5. submit the flag and one short explanation
6. optionally submit a defensive patch or writeup

The challenge is about learning PyPI by hacking a safe toy ecosystem.

## What "Hack" Means Here

Allowed:

- point pip at the provided challenge index
- build toy wheels or sdists inside this repo
- edit challenge-owned index HTML files
- run the victim app inside the challenge workspace
- capture fake flags under `artifacts/`
- inspect installed files in a temporary virtual environment

Not allowed:

- uploading anything to real PyPI
- targeting real package names
- reading real credentials
- contacting external callback servers
- modifying files outside the challenge workspace

## Standard Lab Layout

Each lab should eventually follow this structure:

```text
labs/flag-XX-name/
  README.md
  scenario/
  packages-src/
  indexes/
  victim/
  expected/
```

Some early tutorial labs may be lighter than this.

## Standard Flag Capture

The official fake flag is provided through a local environment variable:

```bash
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-XX}"
```

The package or victim app should write proof to:

```text
artifacts/flag-XX.txt
```

Example proof:

```json
{
  "flag_id": "flag-04",
  "package": "hkpug-ctf-internal-utils",
  "version": "9.9.9",
  "source_index": "public-sim",
  "captured_flag": "HKPUG{practice.flag-04}"
}
```

## Submission

For the MVP, participants submit:

- flag value
- one or two sentence explanation
- optional patch or writeup

For hosted HKPUG mode, answers are encrypted before a pull request.

For community mode, participants can self-check locally and submit a public
writeup after the official window closes.

## E-Cert Progress

Suggested thresholds:

- Participation: 2 valid flags
- Explorer: 5 valid flags including one resolver/build flag
- Completion: 9 valid flags
- Finisher: capstone plus defense checklist
