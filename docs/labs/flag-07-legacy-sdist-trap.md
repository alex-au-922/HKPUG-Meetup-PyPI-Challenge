# Flag 07: Legacy Sdist Trap

!!! danger "Challenge boundary"
    **Build only the toy source distribution in this lab.**

    Do not run legacy build experiments against unknown real packages on your
    main machine.

## Plain English

An sdist is a source distribution. Instead of installing a ready-made wheel, pip
may need to run build logic to create a wheel first.

Older Python packages often used `setup.py`. That file is Python code. If a
build path runs it, the build can have side effects. In this CTF, the side
effect is harmless: a local fake flag marker under `artifacts/`.

## Background: How This Works

The big question is artifact type:

| Artifact | What pip receives | Why you care |
|---|---|---|
| wheel | already built package | less build logic needed locally |
| sdist | source archive | pip may need to run build logic |

Legacy `setup.py` is interesting because it is executable Python code. The lab
does not require packaging history. It requires observation:

1. Did pip download a wheel or an sdist?
2. Did pip build a wheel locally?
3. Which build step wrote the marker?

Use verbose output as your timeline.

Terms for this flag:

| Term | Meaning |
|---|---|
| sdist | source distribution, usually `.tar.gz` |
| wheel | already-built package, usually `.whl` |
| `setup.py` | old-style Python packaging script |
| setuptools | the long-standing library behind many `setup.py` projects |
| build phase | the step where source becomes an installable wheel |

What is `setup.py`? It is a Python file older projects used to describe how a
package is built and installed. A normal-looking `setup.py` may call
`setuptools.setup(...)`, but it is still Python code. If a build path runs it,
top-level code or custom command classes can run too.

Why modern packaging changed this: `pyproject.toml` lets projects declare build
requirements more explicitly, and pip can build inside an isolated temporary
environment. That does not make untrusted code safe, but it reduces accidental
coupling to your normal environment and makes the build path easier to reason
about.

What to observe:

1. whether pip was forced away from wheels
2. whether pip downloaded an sdist
3. whether pip built a wheel locally
4. which setup/build step produced the local marker

## Story

The victim is forced to install from a source distribution. A legacy
`setup.py` path writes a local marker during the controlled build.

Your job is to trigger that source-build path, prove whether pip used a wheel or
an sdist, and capture the fake flag.

## What You Are Trying To Control

You are trying to control artifact type.

The important difference is:

- wheel: already built, usually no project build code needs to run
- sdist: source archive, pip may run build logic to create a wheel
- `--no-binary`: tells pip not to use wheels for selected packages

## Files You Will Get

```text
labs/flag-07-legacy-sdist-trap/
  indexes/
  packages-src/
  victim/
  artifacts/
```

## First Checks

```bash
cd labs/flag-07-legacy-sdist-trap
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-07}"
```

Look at the install command and package links. Then compare:

```bash
python -m pip install -vv --only-binary=:all: --index-url "$CHALLENGE_INDEX_URL" hkpug-ctf-legacy
python -m pip install -vv --no-binary=hkpug-ctf-legacy --index-url "$CHALLENGE_INDEX_URL" hkpug-ctf-legacy
```

One of those commands may be expected to fail depending on the lab assets. The
failure is still information.

## Your Task

Trigger the legacy source-build path, capture the local fake flag, and identify
which build phase created the marker.

The final mile is yours: this page does not tell you which setup hook or command
contains the marker.

## What To Submit

- captured flag
- whether pip used wheel or sdist
- which build phase created the marker
- one modern packaging mitigation

## Hints

1. Nudge: use `-vv` and read the build log, not only the final success line.
2. Direction: forcing source builds changes what code pip must execute.
3. Guided: in hosted mode, include the relevant build log lines.

## Defense Notes

Prefer wheels from trusted sources, modern `pyproject.toml` builds, isolated
build environments, and reproducible dependency policy. Treat source builds from
untrusted packages as code execution.
