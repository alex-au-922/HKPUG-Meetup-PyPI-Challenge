# Flag 25: Safer Index Patch

## Scenario

You exploited an unsafe install configuration. Now fix it.

## Objective

Patch the victim app so it no longer resolves internal packages from the
simulated public index.

## What This Teaches

- hacking should end in remediation
- `--extra-index-url` is dangerous for private names
- pins, hashes, lockfiles, and index policy all matter

## What To Submit

- patched command or config
- explanation of why the old config was unsafe
- practice flag from the fixed self-check

