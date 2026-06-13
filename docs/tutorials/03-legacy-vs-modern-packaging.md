# Legacy Setup.py Versus Modern Packaging

This challenge includes old and modern packaging flows.

## Legacy Pattern

Older packages often use `setup.py` directly. This can mix:

- metadata
- dependency logic
- build logic
- arbitrary Python execution

That is why several labs ask you to compare wheel installs, sdist installs, and
direct `setup.py` behavior.

## Modern Pattern

Modern packages usually declare build requirements in `pyproject.toml`:

```toml
[build-system]
requires = ["setuptools"]
build-backend = "setuptools.build_meta"
```

Modern build frontends can inspect build requirements before building and can
build in isolated environments.

## Security Lesson

Modern packaging is not magic. A malicious package can still run when imported
or executed.

But modern packaging helps because:

- build requirements are explicit
- build isolation narrows accidental environment access
- wheels avoid project build logic at install time
- hashes and lockfiles help detect artifact substitution
- trusted publishing avoids long-lived release tokens

