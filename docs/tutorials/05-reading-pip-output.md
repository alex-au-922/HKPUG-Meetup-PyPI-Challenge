# Reading Pip Output

This page is for the moment where you run pip and the output looks like a wall
of text.

You do not need to understand every line. You need to find the lines that answer
the lab questions.

## Always Know The Command

Before reading output, write down the exact command:

```bash
python -m pip install -vv --index-url "$CHALLENGE_INDEX_URL" hkpug-ctf-hello
```

The command tells you:

- which package was requested
- which index was used
- whether extra indexes were used
- whether wheels or source builds were allowed
- whether a requirements file was involved

## Use Verbose Mode

Use `-v`, `-vv`, or `-vvv` when the normal output is too quiet.

```bash
python -m pip install -vv ...
```

For these labs, `-vv` is usually enough.

## Lines That Matter

Look for these phrases.

| Output phrase | What it usually means |
|---|---|
| `Looking in indexes` | pip is telling you which indexes it will search |
| `Collecting NAME` | pip is trying to satisfy a requirement |
| `Found link` | pip found a possible package file |
| `Skipping link` | pip rejected a possible file and usually says why |
| `Using cached` | pip reused a local cached file |
| `Downloading` | pip selected and fetched a file |
| `Installing build dependencies` | pip is building from source with build isolation |
| `Building wheel for NAME` | pip is building a wheel locally |
| `Successfully built NAME` | local build completed |
| `Successfully installed` | the final selected distributions are installed |

## The Three Questions

For most flags, reduce the output to three answers:

```text
Requested: what did the victim ask for?
Candidates: what possible files did pip see?
Selected: which file/version/index won?
```

If you can answer those, you are usually close.

## Candidate Selection

A candidate is one possible package file pip might install.

Candidates can lose because:

- the version does not match the requirement
- the wheel tag does not match your Python or platform
- the package needs a Python version you do not have
- hashes are required and the hash is missing or wrong
- a newer or better-matching candidate exists

Do not guess. Search the verbose output for why pip skipped a link.

## Wheel Or Sdist

This is one of the most important lab questions.

If pip downloads a `.whl`, it is using a wheel:

```text
Downloading hkpug_ctf_hello-1.0.0-py3-none-any.whl
```

If pip downloads `.tar.gz` and then builds, it is using an sdist:

```text
Downloading hkpug-ctf-legacy-1.0.0.tar.gz
Installing build dependencies
Building wheel for hkpug-ctf-legacy
```

Wheel and sdist paths can behave differently.

## Cache Confusion

Pip may reuse files from its cache. That can confuse CTF testing.

If you suspect cache confusion, use a fresh virtual environment and add:

```bash
python -m pip install --no-cache-dir -vv ...
```

Also check what is already installed:

```bash
python -m pip list
python -m pip show PACKAGE_NAME
```

## After Install

Once a package is installed, inspect it:

```bash
python -m pip show -f PACKAGE_NAME
```

For Python metadata:

```bash
python - <<'PY'
import importlib.metadata

dist = importlib.metadata.distribution("PACKAGE_NAME")
print(dist.metadata["Name"], dist.version)
for ep in dist.entry_points:
    print(ep)
PY
```

Replace `PACKAGE_NAME` with the real toy package name from the lab.

## Stuck Checklist

If you are stuck, answer these in order:

1. What package name did pip receive?
2. What normalized name did pip search?
3. Which indexes did pip search?
4. What versions did pip see?
5. Which links did pip skip?
6. Which file did pip download or build?
7. Did the flag happen during build, install, startup, import, or command run?

You should not need to search the web to answer those questions. The answer
should be in the command, pip output, package metadata, or lab files.
