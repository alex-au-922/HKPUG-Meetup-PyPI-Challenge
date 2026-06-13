# Pip Index Basics

When you run `pip install SomePackage`, pip does not magically know where the
package file is. It asks a package index.

The default index is PyPI, but in this challenge we point pip at local or hosted
toy indexes.

## Important Options

Use one index:

```bash
python -m pip install --index-url file://$PWD/indexes/trusted/simple hkpug-ctf-hello
```

Add another index:

```bash
python -m pip install \
  --index-url file://$PWD/indexes/trusted/simple \
  --extra-index-url file://$PWD/indexes/public-sim/simple \
  hkpug-ctf-hello
```

The second form is where dependency confusion lessons start.

## Simple Index Shape

A minimal index looks like:

```text
indexes/trusted/simple/
  index.html
  hkpug-ctf-hello/
    index.html
packages/
  hkpug_ctf_hello-1.0.0-py3-none-any.whl
```

The project page links to distribution files.

## Name Normalization

Package names are normalized for index lookup. Runs of `.`, `_`, and `-` become
one `-`, and letters are lowercased.

Examples:

- `HKPUG_CTF.Hello`
- `hkpug-ctf-hello`
- `hkpug.ctf_hello`

All normalize to:

```text
hkpug-ctf-hello
```

