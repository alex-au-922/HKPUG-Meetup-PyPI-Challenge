# Flag 16: Legacy Sdist Trap

## Scenario

The victim is forced to install from a source distribution. A legacy `setup.py`
path writes a local marker during the controlled build.

## Objective

Trigger the legacy source-build path and capture the fake flag under
`artifacts/`.

## Submission

- captured flag
- whether pip used wheel or sdist
- which build phase created the marker
- one modern packaging mitigation

