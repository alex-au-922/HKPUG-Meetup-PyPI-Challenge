# Package Build Artifacts

This page explains the files pip installs.

## The Dumb Version

A Python package is not just a folder of code. Pip usually installs a package
file.

The two important package file types are:

- wheel
- source distribution, usually called sdist

## Wheel

A wheel is a built package. It usually ends with:

```text
.whl
```

A wheel is a zip file. You can list it:

```bash
python -m zipfile --list dist/example.whl
```

You can extract it:

```bash
python -m zipfile --extract dist/example.whl /tmp/example-wheel
```

Important files inside a wheel:

- `METADATA`: package name, version, dependencies, extras, entry points hints
- `WHEEL`: wheel format information
- `RECORD`: installed file list and hashes
- package files: the Python code

## Source Distribution

An sdist is source code that may need to be built before install.

It usually ends with:

```text
.tar.gz
```

The scary part: source builds can run build logic. In old projects, that often
means `setup.py` behavior.

## Wheel Versus Sdist

Ask this every time:

```text
Did pip install a ready-made wheel, or did pip build from source?
```

That one question changes where code may run.

## Entry Points

Some packages install commands.

For example, installing a package can create a command like:

```bash
hkpug-proof
```

That command may run code from the package. Flag 06 uses this idea.

## Extras

An extra is an optional dependency group.

This:

```bash
python -m pip install "hkpug-ctf-tool[report]"
```

does not mean "install a different package." It means:

```text
install hkpug-ctf-tool plus the dependencies listed under the report extra
```

Extras can change the dependency graph. That can change what gets installed.

## Lab Question

For any artifact, ask:

1. Where did pip download it from?
2. Is it a wheel or sdist?
3. What version did pip select?
4. What metadata changed the install?
5. What code ran during build, install, import, or command execution?
