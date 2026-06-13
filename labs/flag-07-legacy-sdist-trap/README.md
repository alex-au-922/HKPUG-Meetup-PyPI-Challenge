# Flag 07: Legacy Sdist Trap

## Scenario

The victim is forced to install from a source distribution. A legacy `setup.py`
path writes a local marker during the controlled build.

## Objective

Trigger the legacy source-build path and capture the fake flag under
`artifacts/`.

## What This Teaches

- source builds can run project build logic
- legacy setup.py-era behavior is important to understand
- wheels and modern build frontends change the risk surface

## What To Submit

- captured flag
- whether pip used wheel or sdist
- which build phase created the marker
- one modern packaging mitigation
