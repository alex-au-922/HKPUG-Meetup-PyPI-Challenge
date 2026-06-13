# Security Policy

This is a public CTF repository. Treat every participant-controlled input as
untrusted.

## Core Rule

Participant interaction must not be able to modify the source-of-truth
challenge repository.

Source of truth:

- `main`
- challenge source files
- workflow definitions
- organizer docs

Generated or mutable state:

- `gh-pages`
- scoreboard JSON
- encrypted hint outputs
- submission artifacts
- unlock ledgers

## Allowed Participant Effects

Participants may:

- fork the repository
- open issues or pull requests
- submit encrypted answer bundles
- submit signed hint requests
- run toy packages locally in their own workspace

Participants must not be able to:

- push to `main`
- modify workflow definitions through an automated interaction
- make a workflow run untrusted code with write permissions
- write plaintext secrets into logs, comments, or Pages
- modify other teams' score or hint state

## Workflow Safety Rules

- Default `GITHUB_TOKEN` permission should stay read-only.
- Every workflow must declare explicit `permissions`.
- Workflows triggered by participant-controlled events must not run participant
  code.
- `pull_request_target` and `workflow_run` require extra review because they can
  run in a privileged repository context.
- Never interpolate untrusted issue, PR, or comment text directly into shell
  scripts.
- Store untrusted text in environment variables or parse it as data with a
  trusted script.
- Do not use self-hosted runners for participant-triggered jobs.

## Hints And Scoring

For private hints:

- the frontend may prepare a request
- the team signs the request
- a trusted workflow verifies the signature
- the trusted workflow encrypts the hint to the team certificate
- the trusted workflow records the hint unlock

The frontend must not choose secret hint text or record official state.

For scoring:

- submissions are data, not code
- scorer reads encrypted answers and state ledgers
- scorer writes only to the scoreboard/state branch
- scorer must not commit to `main`

## Current Repository Controls

As of 2026-06-13:

- repository is public
- default workflow token permission is read-only
- allowed Actions are restricted to GitHub-owned/verified actions, with
  explicit allowance for `astral-sh/setup-uv`
- `main` branch protection blocks force-push and deletion
- MkDocs site is generated to `gh-pages`

## Reporting Problems

Open a GitHub issue for design concerns. If a real secret or exploitable repo
configuration is exposed, contact the organizer directly and do not post the
secret publicly.

