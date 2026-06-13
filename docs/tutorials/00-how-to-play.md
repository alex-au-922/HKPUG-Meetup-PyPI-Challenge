# How To Play

This challenge is a safe PyPI hacking trail.

You will:

- create or inspect toy package indexes
- make pip resolve packages from controlled indexes
- inspect wheels and source distributions
- trigger harmless local flag capture
- explain the fix

You will not:

- upload packages to real PyPI
- attack real packages
- use real credentials
- exfiltrate anything

## Basic Workflow

```bash
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt
```

Then open a lab:

```bash
cd labs/flag-01-custom-index-install
```

Read the lab `README.md`, run the setup command, and capture the fake flag.

## Where Flags Go

Most labs write proof under:

```text
artifacts/
```

If a lab prints a flag instead, copy the printed value into your answer bundle.

## When You Are Stuck

Look for:

- the `pip install` command
- the `--index-url` and `--extra-index-url` values
- the project page under `/simple/<normalized-name>/`
- the selected version
- whether pip chose a wheel or sdist

