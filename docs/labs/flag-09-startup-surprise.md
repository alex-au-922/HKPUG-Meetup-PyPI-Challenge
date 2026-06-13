# Flag 09: Startup Surprise

!!! danger "Challenge boundary"
    **Use the disposable virtual environment created for this lab.**

    Do not install startup-hook experiments into your system Python or a shared
    developer environment.

## Plain English

Most beginners think Python code runs only when they import it or execute a
script. That is a good mental model, but it has exceptions.

One old mechanism is a `.pth` file inside `site-packages`. It can add paths to
Python, and lines beginning with `import` can run at interpreter startup.

This lab uses a harmless toy `.pth` effect to teach you to inspect installed
files when behavior appears before your app code runs.

## Background: How This Works

`site-packages` is where packages are installed inside your virtual environment.
Python checks that location during startup.

A `.pth` file can do two things:

- add an import path
- run an `import ...` line during startup

That means the victim script may be innocent. The marker can appear before the
victim imports the suspicious package directly.

For this flag, separate the timeline:

```text
install package -> start Python -> victim code runs
```

The interesting behavior may happen in the middle step.

Terms for this flag:

| Term | Meaning |
|---|---|
| virtual environment | isolated Python environment for one project |
| `site-packages` | directory where installed packages live |
| `.pth` file | startup file processed by Python's `site` module |
| startup | the moment Python begins before your script body runs |
| explicit import | an import statement written in the victim script |

History: `.pth` files are old and legitimate. They can add import paths for
packages that need special layout behavior. The surprising part is that import
lines inside `.pth` files can run during startup. This lab uses that mechanism
only for a harmless local marker.

What to observe:

1. which `site-packages` directory belongs to your `.venv`
2. which `.pth` files are installed
3. whether the victim imports the package directly
4. whether the marker appears when Python starts

## Story

The victim installs a package and then starts Python. A marker appears under
`artifacts/`, even though the victim script does not import the suspicious
module directly.

Your job is to find what installed file caused the marker.

## What You Are Trying To Control

You are trying to observe Python startup behavior.

You should be able to separate:

- code run during package build
- code run during package installation
- code run during Python interpreter startup
- code run by the victim application

## Files You Will Get

```text
labs/flag-09-startup-surprise/
  indexes/
  packages-src/
  victim/
  artifacts/
```

## First Checks

```bash
cd labs/flag-09-startup-surprise
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-09}"
```

After installation, inspect the installed files:

```bash
python -m pip show -f hkpug-ctf-startup
python - <<'PY'
import site
for path in site.getsitepackages():
    print(path)
PY
```

Then look for `.pth` files in the virtual environment's site-packages
directory.

## Your Task

Find the startup mechanism, explain why the victim script did not need a direct
import, and capture the flag.

The final mile is yours: this page tells you the class of mechanism, not the
exact file contents.

## What To Submit

- captured flag
- name of the installed startup file
- one sentence explaining when the code ran
- one defensive practice

## Hints

1. Nudge: `pip show -f` lists installed files by distribution.
2. Direction: inspect `.pth` files in the active virtual environment.
3. Guided: in hosted mode, provide your `site-packages` path when asking.

## Defense Notes

Use isolated environments, review installed files for untrusted packages, and do
not run unknown package installs in privileged Python environments.
