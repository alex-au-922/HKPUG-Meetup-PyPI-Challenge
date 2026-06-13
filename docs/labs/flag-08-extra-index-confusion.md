# Flag 04: Dependency Confusion

## Scenario

The victim app trusts a private index but also uses a simulated public index.
The same package name exists in both places.

## Objective

Make pip choose the higher-version package from `public-sim`, prove which index
won, and capture the fake flag locally.

## Submission

- captured flag
- selected package version
- which index won
- defensive fix
