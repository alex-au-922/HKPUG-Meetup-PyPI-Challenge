# HKPUG Worldwide PyPI Challenge Plan

Planning snapshot: 2026-06-13

## Objective

Run a phased, mostly-free PyPI learning CTF that is operated from a public
GitHub repository, prioritizes HKPUG participants, and still lets people
worldwide play safely.

The challenge should teach how Python package resolution, static package
indexes, wheels, package metadata, and CI release workflows can go wrong,
without publishing harmful packages to real PyPI or exposing real secrets.

The format is closer to an iThome 30-day challenge / public learning sprint than
a high-pressure CTF final. Scores matter because they make progress visible, but
the main goal is participation, learning, and helping people understand PyPI by
carefully hacking on a safe toy ecosystem.

## Positioning

Working title: **HKPUG PyPI 30-Day Learn By Hacking Challenge**

Participants act as a package security team for a fictional Hong Kong software
company. They investigate and fix a simulated private package ecosystem:

- a static PyPI-compatible simple index
- fake internal package names
- toy wheels and source distributions
- vulnerable pip/CI configuration
- fake tokens and generated flags
- defender writeups and remediation tasks

The recommended first version is a normal CTF-style learning journey: phased
tasks, deeper flags, hints, short explanations, and optional writeups. The repo
should never ask participants to upload anything to real PyPI, attack real
packages, or exfiltrate real credentials.

## Lessons From The Existing HKPUG Workshop

The previous data-cleaning tournament used a strong public-repo confidentiality
pattern:

- public starter files and participant instructions
- encrypted hidden labels in the repository
- encrypted participant code submitted through pull requests
- signed manifests tied to an allowlisted team certificate
- a low-privilege workflow to run untrusted participant code
- a privileged `workflow_run` scorer to decrypt hidden data and update the
  leaderboard/progress board
- path allowlisting on pull requests
- daily attempt limits

For this PyPI challenge, reuse that shape, but encrypt **answers and scored
evidence**, not arbitrary offensive code.

Useful local references:

- `/Users/alexau/Project/20260530_workshop/README.md`
- `/Users/alexau/Project/20260530_workshop/submission/encrypt_submission.sh`
- `/Users/alexau/Project/20260530_workshop/.github/workflows/run-cleaner.yml`
- `/Users/alexau/Project/20260530_workshop/.github/workflows/trusted-score.yml`
- `/Users/alexau/Project/20260530_workshop/.github/scripts/verify_team_manifest.py`
- `/Users/alexau/Project/20260530_workshop/.github/scripts/score_and_update_leaderboard.py`

Detailed flag-by-flag lab map:

- `FLAG_LABS_PLAN.md`

Build roadmap and participant guidance:

- `PHASES.md`
- `docs/WORKING_FORMAT.md`
- `docs/tutorials/README.md`
- `labs/README.md`
- `SECURITY.md`
- `docs/organizer/repository-safety-model.md`

## Challenge Philosophy

- **Learn by hacking:** every task should reveal one concrete PyPI or packaging
  mechanism.
- **Progress over podiums:** scoring exists, but completion and reflection matter
  more than ranking.
- **HK-first, world-friendly:** HKPUG participants get the hosted official
  experience first; everyone else can still follow along.
- **Safe toy ecosystem:** all attacks happen against fictional packages, static
  indexes, fake tokens, and local marker files.
- **Reusable content:** after the official run, the challenge becomes a public
  self-paced PyPI learning trail.

## Operating Modes

### 1. HKPUG Official Mode

Use this for the HKPUG hosted challenge.

- Registration required.
- HKPUG participants get priority team slots.
- Each team receives:
  - `team_id`
  - team private key
  - team certificate in the allowlist
  - optional team display name
- Teams submit encrypted answer bundles in PRs.
- The trusted scorer decrypts answers, checks flags, applies attempt limits, and
  updates the official progress board.
- Keep a Hong Kong timezone scoring day, e.g. `Asia/Hong_Kong`.
- Eligible participants receive e-certificates after the event.

### 2. Worldwide Community Mode

Use this for global participation without operational pressure.

- No registration required.
- Same public challenge content.
- Public practice flags or self-check scripts.
- No official hidden leaderboard required.
- People can fork, solve locally, and compare notes after the official HKPUG
  window closes.

### 3. Worldwide Registered Mode

Optional, after the HK-first run is stable.

- Registration required.
- Separate `global-*` team IDs.
- Same encrypted submission process.
- Separate leaderboard bracket from HK teams.
- HKPUG bracket remains the headline bracket for the meetup.

## Challenge Flow

Recommended headline format: 30 days, with a live kickoff, scheduled public
hint drops, and a live wrap-up.

Every flag should be a hacking lab, but not every day needs a new flag. The
better rhythm is 12 substantial flags over 30 days, with each flag spanning 2
to 3 days. Participants should spend time inspecting, experimenting, and
reasoning, but once they understand the idea they should be able to complete
the hack quickly.

The lab loop:

1. read a short scenario
2. run or inspect a controlled install
3. make the toy package or index capture `HKPUG_FAKE_FLAG`
4. submit the flag and one short explanation
5. optionally submit a defensive fix

### 30-Day Hacking Trail

| Flag | Days | Lab | What Participants Learn |
|---:|---|---|---|
| 01 | 1-2 | Index Recon | map a PyPI-compatible index and install from it |
| 02 | 3-5 | Name Maze | normalize project names and find the right project page |
| 03 | 6-7 | Resolver Duel | predict and force candidate selection |
| 04 | 8-10 | Dependency Confusion | make the simulated public package win |
| 05 | 11-13 | Wheel Autopsy | inspect wheel internals and installed metadata |
| 06 | 14-15 | Entry Point Ambush | abuse console entry points and extras safely |
| 07 | 16-18 | Legacy Sdist Trap | trigger a controlled `setup.py` source-build path |
| 08 | 19-21 | Build Isolation Lab | compare build dependencies with isolation on/off |
| 09 | 22-23 | Startup Surprise | find and explain a toy `.pth` startup effect |
| 10 | 24-26 | Pin, Hash, Lock | defeat weak pinning, then fix with hashes/locks |
| 11 | 27-28 | CI Publisher Trap | audit and patch a fake publish workflow |
| 12 | 29-30 | Capstone Incident | build a toy attacker package, capture flag, submit defense |

### Difficulty Calibration

The item can be easy to state, but finding the flag should require real
inspection. The intended solve shape is:

```text
hard to understand at first, quick to execute once understood
```

Good difficulty comes from realistic files, pip output, resolver ambiguity,
wheel-vs-sdist comparison, and needing to explain why the selected package won.
Bad difficulty comes from random hiding places, brute force, or hours of work
after the participant already understands the trick.

### Hint Schedule

Use scheduled public hint drops for the MVP:

| State | Timing | Max Score |
|---|---|---:|
| Fresh | release time | 100% |
| Hint 1 | after 24 hours | 85% |
| Hint 2 | after 48 hours, for 3-day flags | 70% |
| Guided | after the flag window closes | 50% |

Score is based on the public hint state at submission time. This avoids per-user
hint accounting for the MVP while still rewarding early solvers.

For the real HKPUG run, a good upgrade is encrypted scheduled hints:

- generate hint text per flag and hint level
- encrypt each hint to each registered team's certificate
- publish encrypted hint files only when their scheduled release time arrives
- let teams decrypt locally with their team private key
- keep score decay based on the public release schedule

Fully private per-team hint unlocks are possible, but they add more machinery:
a hint request workflow, encrypted hint response, `hint_unlocks.json`, and
scorer logic that applies score decay only to teams that requested hints. GitHub
cannot privately DM hint text from a public repo, so private content still needs
encryption or an external channel. The preferred version is a signed hint
request: the page prepares a request, the team signs it, and GitHub Actions
verifies the signature, encrypts the hint, and records the unlock.

Organizer design note:

- `docs/organizer/private-hint-design.md`

### Phased Rollout

Phase 1 should be enough to launch:

- 5 substantial flags
- public self-checks
- encrypted official answer submission
- progress board
- e-cert eligibility rules

Phase 2 adds depth:

- wheel autopsy
- dependency confusion
- package name normalization
- legacy `setup.py` source-build labs
- modern `pyproject.toml` and build isolation comparisons
- hints and weekly checkpoint posts

Phase 3 makes it a full 30-day event:

- defense labs
- capstone
- e-cert automation
- public post-event solution archive

## Flag Capture Model

Each "malicious" package is a harmless CTF package. Its job is to prove that
the participant controlled a package selection or execution path, not to steal
anything.

Use fake, local-only inputs:

```text
HKPUG_FAKE_FLAG=HKPUG{resolver_lab_team_01}
```

Allowed toy capture behaviors:

- print the fake flag to stdout
- write the fake flag to `artifacts/captured_flag.txt`
- create `artifacts/owned.json` with package name, version, index URL, and flag
- expose a console command that prints the flag
- expose an import-time marker only in the sandbox challenge

Disallowed behaviors:

- network access
- reading real credentials
- scanning home directories
- touching files outside the challenge workspace
- using real package names or real PyPI as a target

This keeps the language and feeling of hacking while making the operation safe
for a public GitHub challenge.

## Package Families In The Challenge

Use small, fictional packages with clear roles:

| Package | Role |
|---|---|
| `hkpug-ctf-internal-utils` | private package used for dependency confusion |
| `hkpug-ctf-normalize-me` | name normalization and index path lab |
| `hkpug-ctf-wheel-autopsy` | wheel metadata inspection lab |
| `hkpug-ctf-sdist-trap` | legacy source distribution and `setup.py` lab |
| `hkpug-ctf-build-helper` | build dependency trust lab |
| `hkpug-ctf-startup-surprise` | `.pth` startup behavior lab |
| `hkpug-ctf-cli-tool` | console entry point lab |
| `hkpug-ctf-victim-app` | app that depends on the toy packages |

For every package, publish source under `packages-src/`, generated distributions
under `packages/`, and index links under `indexes/`. Participants should be able
to inspect everything after the challenge, while the official per-team flags
remain derived from hidden scoring keys.

## Legacy Setup.py Versus Modern Packaging

This should be one of the main "learn by hacking" arcs.

The old-school lab should teach that legacy packaging often mixes metadata,
build logic, dependency discovery, and arbitrary Python execution in ways that
are easy to misunderstand. The modern lab should show that newer tooling does
not make packages automatically safe, but it narrows and standardizes where risk
lives.

### Legacy Labs

Safe challenge examples:

- source distribution that requires a build step before install
- `setup.py` that writes a local marker during a controlled source build
- dynamic metadata that changes based on environment variables
- `setup_requires` or build-time dependency behavior in an old setuptools flow
- package that behaves differently when installed from wheel versus sdist

Participant goal:

- make the old path capture `HKPUG_FAKE_FLAG`
- identify exactly which build/install phase ran
- explain why relying on source builds is riskier than installing reviewed
  wheels with hashes

### Modern Packaging Labs

Safe challenge examples:

- package with `pyproject.toml` and explicit `build-system.requires`
- same package built with and without build isolation
- pinned build backend version versus loose build backend version
- wheel-only install with hashes
- compare pip and uv behavior for build isolation and lockfile-driven installs

Participant goal:

- show which old trick no longer works the same way
- explain where the trust boundary moved
- patch the victim app to use safer install settings

### Security Lesson

Newer package managers and packaging standards are more secure because they make
some hidden behavior explicit:

- build requirements are declared in `pyproject.toml`
- frontends can inspect build dependencies before building
- isolated build environments reduce accidental access to the caller's runtime
  environment
- wheels avoid running project build logic at install time
- hashes and lockfiles make artifact substitution harder
- trusted publishing reduces long-lived release token exposure

But they are not magic. If a selected package is malicious and the user runs or
imports it, code can still execute. The challenge should make participants feel
both halves: modern tooling helps, but index policy, version policy, artifact
review, hashes, CI permissions, and trusted publishing still matter.

## Challenge Design

### Stage 1: Simple Index 101

Publish a static index under GitHub Pages:

```text
simple/
  hkpug-internal-utils/
    index.html
packages/
  hkpug_internal_utils-1.0.0-py3-none-any.whl
```

Players learn that a simple package index can be served as static files. They
must identify the normalized project path, distribution link, version, and hash.

### Stage 2: Name Normalization

Create near-equivalent package names:

- `hkpug-internal-utils`
- `hkpug_internal_utils`
- `HKPUG.Internal.Utils`

The task is to explain which names normalize together and how this affects
package lookup and defense.

### Stage 3: Dependency Confusion

Use two static indexes:

```text
indexes/trusted/simple/
indexes/public-sim/simple/
```

Give players a vulnerable install command:

```bash
python -m pip install \
  --index-url https://pythonhk.github.io/pypi-challenge/indexes/trusted/simple/ \
  --extra-index-url https://pythonhk.github.io/pypi-challenge/indexes/public-sim/simple/ \
  hkpug-internal-utils
```

The simulated public package has a higher version number and wins. The package
must be harmless: it may print or write a local marker such as
`artifacts/owned.txt`, but it must not access real secrets or the network.

### Stage 4: Wheel Autopsy

Players download and inspect a wheel. They answer questions about:

- distribution name
- version
- `METADATA`
- `RECORD`
- included files
- entry points
- unexpected install-time or startup behavior

### Stage 5: Startup Surprise

Use a toy `.pth` or equivalent benign side effect that writes a marker only
inside the challenge workspace. The expected answer is a defender explanation:

- where the side effect is declared
- when it runs
- why a scanner or review missed it
- how to prevent or detect it

### Stage 6: CI Release Trap

Give players a vulnerable workflow and ask them to patch it.

Topics:

- avoid running untrusted PR code in privileged contexts
- limit `GITHUB_TOKEN` permissions
- use trusted publishing instead of long-lived PyPI tokens
- split untrusted build/test jobs from trusted scoring/release jobs
- pin actions or use an allowlist policy

### Stage 7: Final Defender Report

Final submission is not exploit code. It is an encrypted answer bundle:

```text
submission/
  answers.json.cms
  manifest.json
  manifest.sig
```

The answer bundle contains flags, short explanations, and patches or patch
summaries.

## Confidentiality Architecture

Use the same core pattern as the existing HKPUG tournament.

### Public Repository Contents

Safe to publish:

- challenge docs
- toy package sources
- generated wheels
- static simple indexes
- practice flags
- public test harness
- public leaderboard UI
- public certificates
- participant encryption scripts

Keep private:

- private keys
- hidden answer key
- hidden scoring salt or HMAC key
- official flag derivation key
- any organizer-only tie-break data

### Submission Format

Participant-facing plaintext before encryption:

```json
{
  "team_id": "team-01",
  "answers_path": "submission/answers.json.cms",
  "answers_sha256": "filled-by-script",
  "notes": "optional"
}
```

Encrypted `answers.json`:

```json
{
  "stage_1": {
    "flag": "HKPUG{...}",
    "explanation": "..."
  },
  "stage_2": {
    "flag": "HKPUG{...}",
    "explanation": "..."
  }
}
```

PRs should only be allowed to change:

- `submission/answers.json.cms`
- `submission/manifest.json`
- `submission/manifest.sig`

Optionally allow `submission/report.md.cms` if you want longer writeups.

### Workflow Split

Use three workflows:

1. `validate-submission-files.yml`
   - trigger: `pull_request_target`
   - permissions: `pull-requests: read`
   - only lists PR files and rejects disallowed paths
   - does not check out or run PR code

2. `verify-submission.yml`
   - trigger: `pull_request_target`
   - checkout trusted `main`
   - checkout PR into a separate folder
   - copy only allowlisted submission files
   - verify team manifest signature and digest
   - upload encrypted submission artifact

3. `trusted-score.yml`
   - trigger: `workflow_run`
   - permissions: `contents: write`, `pull-requests: write`, `pages: write`
   - decrypts encrypted answers using GitHub secrets
   - scores answers against hidden key
   - updates leaderboard branch
   - comments a compact result on the PR

Do not run participant code in the privileged scorer. For v1, score encrypted
answers and writeups only.

## Team And Flag Strategy

For HKPUG official mode:

- Create team IDs: `hk-01`, `hk-02`, ...
- Put team certificates in an allowlist.
- Derive per-team flags from a private `SCORE_HMAC_KEY`.
- Store the HMAC key only as a GitHub Actions secret.
- Generated flags should be stable for the team and stage:

```text
HKPUG{stage_slug.team_id.hmac_prefix}
```

This prevents simple copying between teams while keeping the public repo fully
open.

For worldwide community mode:

- Use public practice flags.
- Mark them as unscored.
- Publish solutions only after the HKPUG official window closes.

## Safety Guardrails

- Never publish real malicious packages to PyPI.
- Never use real PyPI project names for attack simulation.
- Use names prefixed with `hkpug-ctf-` or another clearly fictional namespace.
- Use static GitHub Pages indexes or local `file://` indexes.
- Use fake tokens such as `HKPUG_FAKE_TOKEN`.
- Avoid network exfiltration entirely.
- If toy package code executes, it should only write local marker files inside
  `artifacts/`.
- Do not use self-hosted runners for untrusted PR workflows.
- Keep `pull_request_target` workflows from executing or importing PR content.
- Treat workflow artifacts from untrusted jobs as untrusted input.

## Repository Skeleton

```text
hkpug-pypi-supply-chain-challenge/
  README.md
  RULES.md
  REGISTRATION.md
  SECURITY.md
  challenges/
    01-simple-index/
    02-name-normalization/
    03-dependency-confusion/
    04-wheel-autopsy/
    05-startup-surprise/
    06-ci-release-trap/
    07-final-report/
  packages-src/
    hkpug_internal_utils/
    hkpug_ctf_startup_demo/
  indexes/
    trusted/simple/
    public-sim/simple/
  packages/
  submission/
    answers.example.json
    manifest.example.json
    encrypt_submission.sh
    encrypt_submission.ps1
  leaderboard/
    index.html
    leaderboard.json
  .github/
    tournament/
      public_keys/
      team_allowlist.json
      hidden_answers.json.cms
    scripts/
      build_static_index.py
      verify_team_manifest.py
      score_and_update_leaderboard.py
    workflows/
      validate-submission-files.yml
      verify-submission.yml
      trusted-score.yml
      deploy-leaderboard-pages.yml
```

## Pre-Game Checklist

### Organizer Setup

- Confirm repo name and GitHub Pages URL.
- Create `main` and `leaderboard` branches.
- Enable GitHub Pages from Actions.
- Add repository variables:
  - `LEADERBOARD_BRANCH=leaderboard`
  - `MAX_DAILY_SCORED_ATTEMPTS=3`
  - `TOURNAMENT_TIMEZONE=Asia/Hong_Kong`
- Add repository secrets:
  - `ANSWERS_PRIVATE_KEY`
  - `SCORE_HMAC_KEY`
- Generate organizer encryption certificate.
- Generate team certificates and private keys.
- Build `team_allowlist.json`.
- Dry-run one official PR with a test team.
- Prepare a manual scoring fallback.

### Registration Form

Suggested Google Form fields:

- team name
- participant names
- primary email
- GitHub usernames
- country or region
- HKPUG member or meetup attendee
- consent to public leaderboard display
- preferred display name
- beginner/intermediate/advanced self-rating
- agreement to safety rules

Use this to assign:

- HK official team IDs first
- worldwide official slots second, if capacity allows
- community-only mode for everyone else

### Participant Materials

- one-page quickstart
- recorded setup video
- sample PR
- Windows OpenSSL instructions
- GitHub Codespaces or Dev Container option
- Discord/Telegram/Slack support channel
- FAQ for fork sync and failed submissions

## Scoring And Progress

Recommended v1 model:

| Area | Points |
|---|---:|
| Flags and task answers | 60 |
| Short explanations | 20 |
| Checkpoint writeups or notes | 10 |
| Final reflection | 10 |

Tie-breakers:

1. higher score
2. earlier best submission time
3. fewer scored attempts

Keep the leaderboard friendly:

- show progress tiers before exact ranking, e.g. `Started`, `Explorer`,
  `Investigator`, `Finisher`
- show exact score only if participants opt in
- allow late completion for certificates even after the competitive window
- do not make prizes depend only on rank

Avoid scoring arbitrary exploit behavior in v1. Score facts, flags, patches,
and writeups. This keeps the worldwide version safe and cheaper to operate.

## E-Certificates

Issue e-certificates as a core participation reward, not only for winners.

Recommended certificate tiers:

| Certificate | Eligibility |
|---|---|
| Participation | registered participant submits at least one valid answer bundle |
| Completion | completes at least 70% of tasks or reaches a defined point threshold |
| Finisher | completes the capstone or final reflection |
| Excellence | top performers or best writeups, optional |

Certificate fields:

- participant display name
- team name, optional
- challenge title
- organizer name, e.g. HKPUG / Python Hong Kong
- completion tier
- issue date
- verification ID
- verification URL

Implementation options:

- generate PDFs from a template after the event
- store `certificates.json` on the leaderboard branch
- publish a verification page that maps certificate IDs to public display names
- email certificates manually for the MVP
- automate certificate generation in Phase 3

Registration should collect certificate display name and consent separately from
GitHub username, because some participants may not want their legal name on the
public progress board.

## Rollout Plan

### Phase 1: HKPUG MVP

Build the first public learning sprint:

1. Simple Index 101
2. Name Normalization
3. Resolver Basics
4. Dependency Confusion
5. Wheel Autopsy

Use encrypted PR answer submission and a friendly progress board. This is
enough for a compelling meetup challenge and a credible first e-cert run.

### Phase 2: Extended Learning Challenge

Add:

- startup surprise
- CI release trap
- final defender report
- global community mode
- certificate generation
- weekly checkpoint posts

### Phase 3: Worldwide Registered Bracket

Add:

- `global-*` team IDs
- separate leaderboard filter
- public post-event solution walkthrough
- repeatable seasonal challenge format

## Source Notes

This plan uses the shared ChatGPT conversation as a starting point, especially
the idea of a public/offline-first Python supply-chain CTF using static PyPI
indexes, GitHub Actions, encrypted PR submissions, and fake per-team flags.

Current official references checked while planning:

- PyPA Simple Repository API:
  `https://packaging.python.org/specifications/simple-repository-api/`
- PyPA guide for hosting a simple repository:
  `https://packaging.python.org/guides/hosting-your-own-index/`
- pip warning that `--extra-index-url` can enable dependency confusion:
  `https://pip.pypa.io/en/latest/cli/pip_install/`
- PyPI Trusted Publishers:
  `https://docs.pypi.org/trusted-publishers/`
- PyPI Trusted Publisher security model:
  `https://docs.pypi.org/trusted-publishers/security-model/`
- GitHub Actions secure use reference:
  `https://docs.github.com/en/actions/reference/security/secure-use`
- GitHub Actions workflow event warning for `pull_request_target`:
  `https://docs.github.com/actions/using-workflows/events-that-trigger-workflows`
- pip build system interface:
  `https://pip.pypa.io/en/stable/reference/build-system/`
- setuptools build system support:
  `https://setuptools.pypa.io/en/latest/build_meta.html`
- PEP 517 build-system interface:
  `https://peps.python.org/pep-0517/`
- uv build isolation:
  `https://docs.astral.sh/uv/concepts/projects/config/#build-isolation`
