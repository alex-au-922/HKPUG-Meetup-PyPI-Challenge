# Lab Index

This is the full 12-flag trail for the 30-day PyPI CTF. Each flag lasts 2 to 3
days, so every lab has enough room for reading, poking, getting stuck, asking
for a hint, and finally connecting the last step yourself.

Every flag page includes background for that flag's core idea. You should not
need to keep another browser tab open just to understand the basic words in the
lab.

!!! danger "Same boundary for every lab"
    **Do not upload anything to real PyPI.**

    **Do not target real package names, real maintainers, real companies, real
    organizations, or real credentials.**

    All packages, indexes, victims, and flags in this CTF are toy assets owned
    by the challenge.

## The 12 Flags

| Flag | Days | Lab | Main thing you learn |
|---:|---|---|---|
| 01 | 1-2 | [Index Recon](flag-01-index-recon.md) | What a PyPI-compatible index is and how pip asks it for files. |
| 02 | 3-5 | [Name Maze](flag-02-name-maze.md) | Why `my.pkg`, `my-pkg`, and `my_pkg` can become the same project name. |
| 03 | 6-7 | [Resolver Duel](flag-03-resolver-duel.md) | How pip chooses one candidate from many versions, links, and constraints. |
| 04 | 8-10 | [Dependency Confusion](flag-04-dependency-confusion.md) | Why mixing private and public-looking indexes can install the wrong package. |
| 05 | 11-13 | [Wheel Autopsy](flag-05-wheel-autopsy.md) | How to open a wheel and read its metadata before trusting it. |
| 06 | 14-15 | [Entry Point Ambush](flag-06-entry-point-ambush.md) | How console scripts and extras can change what gets installed or run. |
| 07 | 16-18 | [Legacy Sdist Trap](flag-07-legacy-sdist-trap.md) | Why old `setup.py` source builds are more dangerous than they look. |
| 08 | 19-21 | [Build Isolation Lab](flag-08-build-isolation-lab.md) | How build dependencies are resolved in a separate environment. |
| 09 | 22-23 | [Startup Surprise](flag-09-startup-surprise.md) | How installed files can affect Python startup in surprising ways. |
| 10 | 24-26 | [Pin, Hash, Lock](flag-10-pin-hash-lock.md) | Why weak pins are not enough and what hashes or locks add. |
| 11 | 27-28 | [CI Publisher Trap](flag-11-ci-publisher-trap.md) | How a fake release workflow can accidentally publish the wrong thing. |
| 12 | 29-30 | [Capstone Incident](flag-12-capstone-incident.md) | Combine index, resolver, build, runtime, and defense thinking. |

## Learning Curve

The first three flags are about seeing the system clearly. You learn what pip is
asking, where the answer comes from, and why a package was chosen.

Flags 04 to 09 are about package behavior. You inspect files, build artifacts,
install-time metadata, and harmless local side effects.

Flags 10 to 12 turn the same ideas into defense. You still hack the toy target,
but the final answer needs an explanation or patch.

## Expected Time

The full trail is designed for roughly 25-35 hands-on hours for a beginner who
reads the flag pages carefully.

| Flag group | Target time |
|---|---:|
| 01-03 | 1-2.5 hours each |
| 04-09 | 2-3 hours each |
| 10-11 | 2-3.5 hours each |
| 12 | 4-6 hours |

The final-mile solve should still take thought, but the background vocabulary
should be available inside the flag pages and hint pages.

## Hint Schedule

Each lab has three hint levels:

| Hint | Opens | Score impact | Purpose |
|---|---|---:|---|
| Nudge | Around 24 hours after lab launch | small | Points you at the right file or command. |
| Direction | Around 48 hours after lab launch | medium | Names the concept you should test. |
| Guided | Hosted mode only | larger | Gives a personalized next step and marks that a guided hint was used. |

The hosted HKPUG run may adjust the exact timing. Community players can still
use the public hint text for learning.
