# Flag 01: Index Recon

!!! danger "Challenge boundary"
    **Use only the challenge index for this lab.**

    Do not upload anything to real PyPI and do not use real package names as
    targets.

## Plain English

Pip does not magically know where every package file lives. It asks an index.
The normal public index is PyPI, but pip can also ask a different index if you
give it `--index-url`.

An index is just a website with a simple listing of package files. In this lab,
you learn to point pip at the toy challenge index and prove that real PyPI was
not involved.

## Background: How This Works

For this flag, think of the index as three layers:

| Layer | What it is |
|---|---|
| index root | the page that lists project names |
| project page | the page for one normalized package name |
| artifact link | the wheel or source file pip can download |

Pip is not doing a broad web search. It reads the index pages, follows package
links, then chooses a file. Your evidence should connect those three layers.

When you run with `-vv`, look for:

- the index URL pip searched
- the links pip found
- the artifact pip downloaded or installed

Terms for this flag:

| Term | Meaning |
|---|---|
| pip | the Python package installer |
| index | a website or folder listing package files |
| `/simple/` | the simple package-index API used by pip |
| project page | the index page for one package name |
| artifact | the actual wheel or source file pip installs |

Why this exists: PyPI is not magic. It is a package index that follows a simple
shape. Private companies and CTFs can run their own indexes with the same shape.
Once you understand this, "installing from PyPI" becomes "pip read some index
pages and selected a file."

What to observe:

1. the exact index URL pip searched
2. the project page path for the package
3. the artifact filename pip selected
4. whether the artifact came from the toy challenge index

## Story

You are given a package named `hkpug-ctf-hello`. It is not meant to exist on
real PyPI. It exists only in the challenge ecosystem.

Your first job is to map the index, identify the project page, install the
selected artifact, and write proof under `artifacts/`.

## What You Are Trying To Control

You are trying to control where pip searches.

The important difference is:

- `pip install package` asks the default index unless configured otherwise.
- `pip install --index-url URL package` asks the URL you gave it.
- The package page usually lives under a `/simple/` path.

## Files You Will Get

```text
labs/flag-01-index-recon/
  indexes/
  packages-src/
  victim/
  artifacts/
```

## First Checks

Create a disposable environment:

```bash
cd labs/flag-01-index-recon
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-01}"
```

Before you install, inspect the index like a web page or local folder. You are
looking for:

- the `/simple/` root
- the project page for `hkpug-ctf-hello`
- links to wheel or source distribution files
- any hash fragments in those links

Then install with the challenge index:

```bash
python -m pip install -vv --index-url "$CHALLENGE_INDEX_URL" hkpug-ctf-hello
```

Verbose output matters here. It tells you which links pip saw and which artifact
it finally selected.

## Your Task

Install the package from the challenge index and capture the local fake flag.
Record the exact artifact URL or path that pip selected.

The final mile is yours: this page tells you where to look, but not which line
in the index proves the answer.

## What To Submit

- captured flag
- install command used
- selected artifact URL or path
- one sentence explaining why real PyPI was not involved

## Hints

1. Nudge: if pip cannot find the package, check whether your index URL ends at
   the correct `/simple/` location.
2. Direction: package project pages use normalized names.
3. Guided: in hosted mode, ask after you can show the index root and the
   project page you inspected.

## Defense Notes

Real projects should make trusted package sources explicit. A clear index URL is
boring in the best possible way: future readers can see where packages came
from.
