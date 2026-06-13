# CTF Phase Plan

Planning snapshot: 2026-06-13

The challenge should be built in playable phases. Each phase should add a small
set of flags, tutorial pages, and release checks.

## Phase 0: Repo And Working Format

Goal: make the challenge easy to join.

Deliverables:

- participant working format
- tutorial index
- lab template
- first five lab stubs
- registration and certificate rules
- GitHub issue roadmap

Success check:

- a new participant can read `docs/WORKING_FORMAT.md` and understand how to
  solve, capture, and submit one flag.

## Phase 1: MVP Hacking Trail

Goal: ship a complete mini-CTF story.

Flags:

- 01 index recon
- 02 name maze
- 04 dependency confusion
- 05 wheel autopsy
- 07 legacy sdist trap

Success check:

- participants experience the whole loop: index, resolver, package artifact,
  legacy build path, and defensive fix.

## Phase 2: Full Index And Resolver Track

Goal: make participants comfortable hacking package indexes.

Flags:

- 03 resolver duel
- 04 dependency confusion, if not already shipped in MVP

Success check:

- participants can predict which artifact pip will choose before installing.

## Phase 3: Artifact And Runtime Track

Goal: teach what packages actually install.

Flags:

- 05 wheel autopsy, if not already shipped in MVP
- 06 entry point ambush
- 09 startup surprise

Success check:

- participants can inspect wheels, installed files, and runtime side effects.

## Phase 4: Legacy Versus Modern Packaging Track

Goal: teach why old setup.py-era paths are riskier and why modern packaging
narrows some risks.

Flags:

- 07 legacy sdist trap, if not already shipped in MVP
- 08 build isolation lab
- 10 pin, hash, lock

Success check:

- participants can explain the difference between source builds, wheels,
  build isolation, hashes, and lockfiles.

## Phase 5: Defense, CI, And Capstone

Goal: turn hacking into remediation.

Flags:

- 11 CI publisher trap
- 12 capstone incident

Success check:

- participants can produce a practical PyPI supply-chain defense checklist.
