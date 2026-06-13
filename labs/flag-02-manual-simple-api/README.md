# Flag 02: Manual Simple API Inspection

## Scenario

Before using pip, inspect the index by hand. The project page is just HTML that
links to package files.

## Objective

Find the wheel URL and hash for `hkpug-ctf-hello` by reading the simple index
pages.

## What This Teaches

- the simple repository API can be static HTML
- project pages are under normalized package names
- package links are inspectable before install

## What To Submit

- project page path
- wheel filename
- hash fragment or computed hash
- practice flag

