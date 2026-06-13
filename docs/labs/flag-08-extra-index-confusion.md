# Flag 08: Extra Index Confusion

## Scenario

The victim app trusts a private index but also uses a simulated public index.
The same package name exists in both places.

## Objective

Make pip choose the higher-version package from `public-sim` and capture the
fake flag locally.

## Submission

- captured flag
- selected package version
- which index won
- defensive fix

