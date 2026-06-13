# HKPUG PyPI 30-Day CTF

Learn how PyPI and Python packaging work by hacking a safe toy package
ecosystem.

Participant site:

https://alex-au-922.github.io/HKPUG-Meetup-PyPI-Challenge/

## What This Is

This is a public learning CTF for Python packaging and PyPI supply-chain
security. Participants work through a series of hands-on labs involving:

- PyPI-compatible indexes
- pip resolver behavior
- dependency confusion
- wheels and source distributions
- legacy `setup.py` behavior
- modern `pyproject.toml` and build isolation
- hashes, lockfiles, and safer release practices

## Important Rules

**Do not upload challenge packages to real PyPI.**

**Do not target real package names, real maintainers, or real organizations.**

**Do not read real credentials or contact external callback servers.**

All hacking should happen inside the challenge workspace, using toy package
names and fake flags.

## Start Here

1. Open the participant site.
2. Read **Rules** and **How To Play**.
3. Start with **Flag 01: Index Recon**.
4. Use **Hints** when they open.
5. Track progress on the scoreboard.

## Local Docs Preview

```bash
python -m venv .venv-docs
source .venv-docs/bin/activate
python -m pip install -r requirements-docs.txt
mkdocs serve
```

## Repository Layout

```text
docs/       participant-facing MkDocs content
labs/       lab workspaces and challenge material
mkdocs.yml  participant site navigation
```
