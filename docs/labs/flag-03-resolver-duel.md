# Flag 03: Resolver Duel

!!! danger "Challenge boundary"
    **Use only the toy indexes and toy package names in this lab.**

    Do not test resolver tricks against real packages, real organizations, or
    real package indexes.

## Plain English

When you type `pip install something`, pip may see many possible files. There
can be many versions, several indexes, wheels for different Python versions,
and requirements like `<2` or `>=1.4`.

The resolver is the part of pip that chooses one candidate. This lab teaches you
to slow down and answer: "Why did pip choose that file instead of this one?"

## Mini Tutorial

A candidate is one possible package file.

Pip may reject a candidate because:

- the version is outside the requirement range
- the wheel is not compatible with your Python
- a newer matching version exists
- hashes are required and the file does not match
- pre-release versions are not allowed

Your job is to turn pip output into a small table:

| Candidate | Accepted or skipped? | Why? |
|---|---|---|
| version A | skipped | does not match requirement |
| version B | accepted | best matching candidate |

Do not start by guessing the winning version. First list what pip can see.

## Story

The victim app asks for a toy package called `hkpug-ctf-widget`. The challenge
index contains several versions. Some look usable, some are too old, and one is
the version that can capture the local fake flag.

Your job is not to guess. Your job is to make pip show you the candidate list,
then use the victim's requirement to force the winning candidate.

## What You Are Trying To Control

You are trying to control package selection.

That means you care about:

- package name
- version number
- index URL
- requirement specifier, such as `>=1.0,<2.0`
- wheel compatibility tag
- whether pip is allowed to use pre-release versions

## Files You Will Get

```text
labs/flag-03-resolver-duel/
  indexes/
  packages-src/
  victim/
  artifacts/
```

The hosted challenge may generate the package files for you. The public repo
does not publish official flag values.

## First Checks

Start by creating a fresh environment. Fresh matters because cached installs can
make you think pip selected something that was already present.

```bash
cd labs/flag-03-resolver-duel
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-03}"
```

Then inspect the index before installing:

```bash
python -m pip index versions hkpug-ctf-widget --index-url "$CHALLENGE_INDEX_URL"
```

If `pip index versions` is not enough, use verbose install output:

```bash
python -m pip install -vv --index-url "$CHALLENGE_INDEX_URL" "hkpug-ctf-widget"
```

## Your Task

Find the requirement or install command that makes pip choose the flag-bearing
candidate. Confirm the chosen version from pip output or installed metadata.

The final mile is yours: the docs will not tell you which exact version wins.

## What To Submit

- captured flag
- exact requirement string used
- selected package version
- one sentence explaining why pip rejected the other candidates

## Hints

1. Nudge: look for the lines in verbose pip output that say a link was skipped.
2. Direction: compare the available versions with the victim requirement.
3. Guided: in hosted mode, request a guided hint after you can show your
   candidate list.

## Defense Notes

Real projects should not rely on "pip probably picks the one I meant." Pin
important dependencies, keep indexes explicit, and use lockfiles or hashes when
the install must be reproducible.
