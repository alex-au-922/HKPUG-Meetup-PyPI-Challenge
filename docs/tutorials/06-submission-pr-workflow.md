# Submission PR Workflow

This page explains the hosted submission workflow and the GitHub usability
problem it is designed to avoid.

## The Problem

If every participant opens one pull request per flag, a 12-flag event becomes
noisy very quickly.

```text
100 participants x 12 flags = 1200 pull requests
```

That is bad for players and bad for reviewers. Players cannot find their own
work. Reviewers cannot see progress clearly.

## The Rule

Hosted mode should use:

```text
one participant or team = one long-lived pull request
```

You update the same PR as you solve more flags.

## Enforcement

The repository has a submission guard workflow. It checks PR title, branch name,
team folder, and duplicate PRs.

GitHub does not usually "delete" pull requests. The guard does this instead:

- labels submission PRs as `submission`
- fails the PR check when the format is wrong
- comments with the exact fix
- auto-closes duplicate PRs for the same team

Maintainers can switch on stricter mode later to auto-close every invalid
submission PR, but the default is friendlier: fix the PR and the check turns
green.

## Team Code

Each participant or team gets a short code during registration:

```text
HKPUG-TEAM-AB12
```

The team code is not a secret. It is only an identifier for search, scoring, and
certificate matching.

Do not put real names, emails, tokens, or private flags in filenames.

## Branch Name

Use this branch pattern:

```text
submissions/HKPUG-TEAM-AB12
```

## Pull Request Title

Use this PR title:

```text
[HKPUG-TEAM-AB12] submissions
```

This makes the PR easy to find with GitHub search.

## Submission Files

Hosted mode should use encrypted answer bundles:

```text
submissions/
  HKPUG-TEAM-AB12/
    flag-01.json.enc
    flag-02.json.enc
    flag-04.json.enc
```

Add one file per solved flag. Do not rewrite another team's folder.

## Pull Request Body

Use a checklist so progress is visible:

```markdown
Team code: HKPUG-TEAM-AB12

- [x] Flag 01 submitted
- [x] Flag 02 submitted
- [ ] Flag 03 submitted
- [ ] Flag 04 submitted
- [ ] Flag 05 submitted
- [ ] Flag 06 submitted
- [ ] Flag 07 submitted
- [ ] Flag 08 submitted
- [ ] Flag 09 submitted
- [ ] Flag 10 submitted
- [ ] Flag 11 submitted
- [ ] Flag 12 submitted
```

## Finding Your PR

In GitHub search, use:

```text
is:pr is:open author:@me repo:alex-au-922/HKPUG-Meetup-PyPI-Challenge
```

Or search your team code:

```text
HKPUG-TEAM-AB12
```

If the event site adds a participant dashboard later, it should link directly to
the PR search for your team code.

## Reviewer Labels

Maintainers can apply labels such as:

```text
submission
needs-review
accepted
needs-fix
flag-01
flag-02
```

Participants do not need to manage labels. The title and team folder are enough
for them to find their work.

## Community Mode

Community mode does not need encrypted PR submissions. Community players can
solve locally, keep notes, and publish writeups after the official window.

The same rule still helps:

```text
one player fork = one visible progress place
```
