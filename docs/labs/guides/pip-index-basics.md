# Pip Index Basics

This page explains the first mental model.

## What Is Pip?

`pip` is the tool that installs Python packages.

When you type:

```bash
python -m pip install requests
```

you are asking pip to:

1. find a package named `requests`
2. choose a version
3. download a file
4. install that file into your Python environment

## What Is PyPI?

PyPI is the default public package index. It is where pip usually looks.

This challenge does **not** use real PyPI as the target. We use toy indexes that
look like PyPI indexes.

## What Is An Index?

An index is a website or folder that says:

```text
Here are package names.
Here are package files for each name.
Here are links to download those files.
```

A very small index can just be HTML files.

## What Is `/simple/`?

Python package indexes expose a "simple" API. In this challenge, it often looks
like:

```text
indexes/trusted/simple/
  index.html
  hkpug-ctf-hello/
    index.html
packages/
  hkpug_ctf_hello-1.0.0-py3-none-any.whl
```

The root page lists projects. The project page lists package files.

## One Index

This asks pip to use one trusted toy index:

```bash
python -m pip install \
  --index-url file://$PWD/indexes/trusted/simple \
  hkpug-ctf-hello
```

The key phrase is `--index-url`.

## Two Indexes

This asks pip to use one main index and one extra index:

```bash
python -m pip install \
  --index-url file://$PWD/indexes/trusted/simple \
  --extra-index-url file://$PWD/indexes/public-sim/simple \
  hkpug-ctf-hello
```

The dangerous phrase is `--extra-index-url`.

If the same package exists in both places, you must ask:

```text
Which candidate does pip think is best?
```

That question powers several flags.

## Name Normalization

Package names are normalized before lookup.

These can point to the same normalized name:

- `HKPUG_CTF.Hello`
- `hkpug-ctf-hello`
- `hkpug.ctf_hello`

They normalize to:

```text
hkpug-ctf-hello
```

So when a lab gives you weird punctuation, do not panic. Normalize the name and
look for the matching project page.

## Useful Commands

Run pip with more detail:

```bash
python -m pip install -vv ...
```

Download without installing:

```bash
python -m pip download ...
```

Show installed package details:

```bash
python -m pip show hkpug-ctf-hello
```

The flag pages give you the map for each solve. These guides are backup
reference when you want one idea explained again.
