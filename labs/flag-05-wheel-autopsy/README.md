# Flag 05: Wheel Autopsy

## Scenario

A wheel was installed. Before trusting it, inspect it.

## Objective

Unzip the wheel, inspect the metadata files, and find the behavior that leads to
the flag.

## What This Teaches

- wheels are zip files
- `METADATA`, `WHEEL`, and `RECORD` are reviewable
- package review is possible before install

## What To Submit

- metadata flag
- distribution name
- version
- one suspicious or important file found
