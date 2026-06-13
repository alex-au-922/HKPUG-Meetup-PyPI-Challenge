# Participant Working Format

This page explains how participants should work through the challenge.

!!! danger "Before you start"
    **Do not upload packages to real PyPI.**

    **Do not target real packages or read real credentials.**

    Use only the toy package names, toy indexes, and fake flags provided by this
    challenge.

## The Lab Loop

Each flag follows the same shape:

1. read the scenario
2. read the mini tutorial inside that flag page
3. run the setup command
4. inspect or modify the toy index/package
5. make the controlled package capture the fake flag
6. submit the flag and one short explanation
7. optionally submit a defensive patch or writeup

The challenge is about learning PyPI by hacking a safe toy ecosystem.

The separate Tutorial section is a reference shelf. It should help when you
want to review pip output, artifacts, or submission format, but the core lesson
for a flag should be inside the flag page itself.

## Expected Time

The challenge runs for 30 calendar days, but the expected hands-on work is much
smaller.

| Section | Target time |
|---|---:|
| Flags 01-03: index, names, resolver | 4-7 hours total |
| Flags 04-09: main package hacking labs | 12-18 hours total |
| Flags 10-11: defense and CI | 4-7 hours total |
| Flag 12: capstone | 4-6 hours |

For a beginner who reads the tutorials carefully, the full trail should land
around 25-35 hands-on hours. The tutorials are meant to replace most background
searching. The remaining work should be investigation inside the lab, not
learning packaging vocabulary from scratch.

## What "Hack" Means Here

Allowed:

- point pip at the provided challenge index
- build toy wheels or sdists inside this repo
- edit challenge-owned index HTML files
- run the victim app inside the challenge workspace
- capture fake flags under `artifacts/`
- inspect installed files in a temporary virtual environment

Not allowed:

- **uploading anything to real PyPI**
- **targeting real package names**
- **reading real credentials**
- **contacting external callback servers**
- **modifying files outside the challenge workspace**

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

For the public challenge flow, participants submit:

- flag value
- one or two sentence explanation
- optional patch or writeup

For hosted HKPUG mode, answers are encrypted before a pull request.

For community mode, participants can self-check locally and submit a public
writeup after the official window closes.

## Finding Your Submission PR

Hosted mode should use **one long-lived pull request per participant or team**.
Do not open one pull request per flag.

Use this title format:

```text
[HKPUG-TEAM-AB12] submissions
```

Use this branch format:

```text
submissions/HKPUG-TEAM-AB12
```

Then update the same PR as you solve more flags. To find your PR, search GitHub
for your team code or use:

```text
is:pr is:open author:@me repo:alex-au-922/HKPUG-Meetup-PyPI-Challenge
```

The team code is not secret. The flag answers are secret and should be encrypted
in hosted mode.

## E-Cert Progress

Suggested thresholds:

- Participation: 2 valid flags
- Explorer: 5 valid flags including one resolver/build flag
- Completion: 9 valid flags
- Finisher: capstone plus defense checklist
