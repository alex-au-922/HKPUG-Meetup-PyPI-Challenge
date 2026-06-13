# Flag 03: Name Normalization

## Scenario

The same package can be requested with different punctuation. Pip normalizes the
name before looking up the project page.

## Objective

Show that package name variants resolve to the same normalized project name.

Examples:

- `HKPUG_CTF.Normalize.Me`
- `hkpug-ctf-normalize-me`
- `hkpug.ctf_normalize-me`

## What This Teaches

- `.`, `_`, and `-` are normalized for lookup
- private package naming policy matters
- collision-style mistakes can cause confusion

## What To Submit

- normalized name
- package variants tested
- practice flag

