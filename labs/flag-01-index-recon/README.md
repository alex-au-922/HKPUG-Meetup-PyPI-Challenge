# Flag 01: Index Recon

## Scenario

You are given a package that is not on real PyPI. Your first job is to map the
challenge index, identify the project page, and install the selected artifact.

## Objective

Make pip install `hkpug-ctf-hello` from the trusted challenge index and write
proof under `artifacts/flag-01.json`.

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
- selected artifact URL or path
- one sentence explaining why real PyPI was not involved
