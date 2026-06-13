# Package Build Artifacts

Python packages commonly arrive as wheels or source distributions.

## Wheel

A wheel is a built artifact. It is a zip file with metadata.

Useful files:

- `METADATA`
- `WHEEL`
- `RECORD`
- package files

Inspect one:

```bash
python -m zipfile --list dist/example.whl
python -m zipfile --extract dist/example.whl /tmp/example-wheel
```

## Source Distribution

An sdist contains source that may need to be built before install.

That build step is the interesting part for several labs. Legacy `setup.py`
source builds can run project build logic in ways participants should learn to
recognize.

## Lab Question

For any artifact, ask:

- Where did pip download it from?
- Is it a wheel or sdist?
- What version did pip select?
- What code ran during build, install, import, or command execution?

