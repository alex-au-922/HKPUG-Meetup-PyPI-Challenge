# Legacy Setup.py Versus Modern Packaging

This page explains why old packaging behavior matters.

## The Simple Story

Old Python packages often used a file named:

```text
setup.py
```

That file is Python code. If a tool runs it, code can run.

Modern packages often use:

```text
pyproject.toml
```

That file declares the build system more explicitly.

## Why Setup.py Is Interesting

`setup.py` can describe the package, but it can also execute Python code during
some old build paths.

That means a package can behave differently depending on how it is installed:

- from a wheel
- from an sdist
- by direct `setup.py` invocation
- by a modern build frontend

The labs do not ask you to memorize history. They ask you to observe which path
ran.

## What Is Build Isolation?

Build isolation means the build happens in a temporary environment instead of
your normal environment.

This helps because the build sees fewer accidental packages and variables.

It does not make malicious packages safe. It narrows where the risk lives.

## Modern Does Not Mean Safe

Modern packaging helps because:

- build requirements are declared
- build environments can be isolated
- wheels avoid running project build logic at install time
- hashes and lockfiles can detect artifact swaps

But if you install and run a malicious package, Python code can still run.

## What To Look For In Labs

When a lab mentions legacy packaging, ask:

1. Is pip using a wheel or sdist?
2. Is a build step happening?
3. Is `setup.py` involved?
4. Is `pyproject.toml` involved?
5. Does isolation change what the build can see?

The final mile is identifying the exact phase where the fake flag appears.
