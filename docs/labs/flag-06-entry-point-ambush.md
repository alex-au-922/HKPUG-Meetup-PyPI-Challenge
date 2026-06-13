# Flag 06: Entry Point Ambush

!!! danger "Challenge boundary"
    **Run only challenge-owned console scripts inside the challenge virtual
    environment.**

    Do not create package commands that touch real user files, credentials, or
    external services.

## Plain English

A package can install commands into your virtual environment. You may install a
package named `hkpug-ctf-tool`, then suddenly get a command named
`hkpug-tool` in `.venv/bin/`.

That command is usually created from package metadata called an entry point.
The code may not run during installation, but it can run the moment a user calls
the command.

## Background: How This Works

An entry point is metadata that says:

```text
command name -> Python module:function
```

After install, pip creates a small command wrapper in the virtual environment.
When the user runs that command, Python calls the target function.

Extras are different. An extra is an optional dependency group:

```text
package[extra-name]
```

For this flag, keep the two ideas separate:

- entry point: what command gets created?
- extra: did installing with `[something]` pull in more packages?

Terms for this flag:

| Term | Meaning |
|---|---|
| console script | a command installed into the virtual environment |
| entry point | metadata mapping a command to `module:function` |
| extra | optional dependency group requested with square brackets |
| wrapper | the small generated script that calls package code |

History: entry points are a normal packaging feature. They let packages install
commands like `black`, `pytest`, or `mkdocs`. The security lesson is not that
entry points are bad. It is that installing a package can add commands, and
automation may run those commands without reading where they point.

What to observe:

1. which files were installed
2. which entry points the distribution declares
3. which command exists in `.venv/bin/`
4. whether an extra changed the dependency graph

## Story

The victim workflow installs a toy package and then runs a helper command from
that package. The package has normal-looking metadata, but one console script
is wired to the flag capture path.

Some optional behavior is hidden behind an extra. In packaging, an extra is the
part inside square brackets, such as `package[dev]`.

## What You Are Trying To Control

You are trying to control which command appears after installation and which
extra dependencies are pulled in.

You should be able to answer:

- Which package created the command?
- Which metadata file lists the command?
- Did the install include any extras?
- What command actually triggers the flag?

## Files You Will Get

```text
labs/flag-06-entry-point-ambush/
  indexes/
  packages-src/
  victim/
  artifacts/
```

## First Checks

Use a fresh environment:

```bash
cd labs/flag-06-entry-point-ambush
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
export HKPUG_FAKE_FLAG="HKPUG{practice.flag-06}"
```

After installing the toy package, inspect metadata:

```bash
python -m pip show -f hkpug-ctf-tool
python - <<'PY'
import importlib.metadata
dist = importlib.metadata.distribution("hkpug-ctf-tool")
for ep in dist.entry_points:
    print(ep)
PY
```

## Your Task

Install the correct toy package shape, identify the generated command, and run
the command path that captures the flag.

The final mile is not printed here. You must connect the entry point metadata to
the command that appears in your virtual environment.

## What To Submit

- captured flag
- console command name
- entry point target, such as `module:function`
- whether an extra was required

## Hints

1. Nudge: `pip show -f` tells you which files were installed.
2. Direction: entry points live in installed distribution metadata.
3. Guided: in hosted mode, ask only after you can show the package metadata.

## Defense Notes

Do not run newly installed commands blindly in automation. In real projects,
review console entry points, restrict trusted package sources, and keep
installation separate from privileged release steps.
