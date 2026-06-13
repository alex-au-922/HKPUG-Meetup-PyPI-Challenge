# CTF Phase Plan

Planning snapshot: 2026-06-13

The challenge should be built in playable phases. Each phase should add a small
set of flags, tutorial pages, and organizer checks.

## Phase 0: Repo And Working Format

Goal: make the challenge easy to join.

Deliverables:

- participant working format
- tutorial index
- lab template
- first seven lab stubs
- registration and certificate rules
- GitHub issue roadmap

Success check:

- a new participant can read `docs/WORKING_FORMAT.md` and understand how to
  solve, capture, and submit one flag.

## Phase 1: MVP Hacking Trail

Goal: ship a complete mini-CTF story.

Flags:

- 01 custom index install
- 02 manual simple API inspection
- 03 package name normalization
- 08 extra-index dependency confusion
- 11 wheel autopsy
- 16 legacy sdist trap
- 25 safer index patch

Success check:

- participants experience the whole loop: index, resolver, package artifact,
  legacy build path, and defensive fix.

## Phase 2: Full Index And Resolver Track

Goal: make participants comfortable hacking package indexes.

Flags:

- 04 local mini index
- 05 broken index repair
- 06 version selection
- 07 single-index install
- 09 normalized-name collision
- 10 resolver report

Success check:

- participants can predict which artifact pip will choose before installing.

## Phase 3: Artifact And Runtime Track

Goal: teach what packages actually install.

Flags:

- 12 RECORD tamper check
- 13 console entry point
- 14 import-time behavior
- 15 extras path
- 21 `.pth` startup surprise
- 22 detect installed surprise

Success check:

- participants can inspect wheels, installed files, and runtime side effects.

## Phase 4: Legacy Versus Modern Packaging Track

Goal: teach why old setup.py-era paths are riskier and why modern packaging
narrows some risks.

Flags:

- 17 direct setup.py legacy path
- 18 dynamic metadata
- 19 build dependency trust
- 20 build isolation toggle
- 23 hash-checked requirements
- 24 pinning bypass lesson
- 28 lockfile comparison

Success check:

- participants can explain the difference between source builds, wheels,
  build isolation, hashes, and lockfiles.

## Phase 5: Defense, CI, And Capstone

Goal: turn hacking into remediation.

Flags:

- 26 CI token trap
- 27 trusted publishing design
- 29 incident timeline
- 30 capstone

Success check:

- participants can produce a practical PyPI supply-chain defense checklist.

