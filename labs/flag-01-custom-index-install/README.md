# Flag 01: Custom Index Install

## Scenario

You are given a package that is not on real PyPI. Your first job is to install
it from the challenge index.

## Objective

Make pip install `hkpug-ctf-hello` from the trusted challenge index and print
the practice flag.

## What This Teaches

- pip installs from an index URL
- `--index-url` changes where pip searches
- the challenge uses toy packages, not real PyPI

## Expected Capture

```text
artifacts/flag-01.txt
```

## What To Submit

- captured flag
- install command used
- one sentence explaining why real PyPI was not involved

