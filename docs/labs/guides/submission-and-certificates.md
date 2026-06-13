# Submission And Certificates

Hosted HKPUG mode and community mode may use different submission paths. The
event announcement will say which one is active.

## What A Good Answer Looks Like

A good CTF answer is not only the flag. It should also show that you understood
the packaging behavior.

For most labs, write:

```text
Flag: HKPUG{...}
Why it worked: pip selected package/version/link X because Y.
Evidence: command output, metadata file, artifact path, or workflow line.
Defense: the smallest change that would prevent this in a real project.
```

Keep it short. The goal is proof of understanding, not a long essay.

## Official Submission

Participants may be asked to submit:

- flag answers
- short explanations
- optional writeup or patch

Official scoring updates the progress board and certificate eligibility.

Hosted mode should use one long-lived PR per participant or team. Read
[Submission PR Workflow](submission-pr-workflow.md) before opening a PR.

## Community Submission

Community participants can:

- solve locally
- keep notes
- publish writeups after the official window
- use public practice flags

## Certificate Tiers

Suggested tiers:

- Participation: 2 valid flags
- Explorer: 5 valid flags including one resolver/build flag
- Completion: 9 valid flags
- Finisher: capstone plus defense checklist

Registration should collect a certificate display name separately from GitHub
username.
