# Flag 01: Index Recon

## Plain English

Pip installs packages from an index. The default public index is PyPI, but this
challenge uses a toy index. Your first job is to prove you can point pip at the
toy index and identify the exact file pip selected.

## Goal

Install `hkpug-ctf-hello` from the challenge index and write proof under
`artifacts/`.

Practice flag for local scaffolding:

```text
HKPUG{practice.flag-01}
```

## Expected Files

```text
labs/flag-01-index-recon/
  README.md
  indexes/
  packages-src/
  victim/
  artifacts/
```

## Local Setup

```bash
cd labs/flag-01-index-recon
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-01}"
```

## Player Task

Map the `/simple/` index, find the project page, install the toy package, and
record the selected artifact URL or path.

## What To Submit

- captured flag
- install command used
- selected artifact URL or path
- why real PyPI was not involved
