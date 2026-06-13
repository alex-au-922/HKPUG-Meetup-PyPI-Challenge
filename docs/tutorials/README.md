# Tutorial Pages

These tutorials explain the working format with almost no assumed background.
They are intentionally basic about vocabulary, commands, and where to look.

The goal is that a beginner should not need to search the web for normal lab
vocabulary. The labs still leave the final connection for you.

Recommended reading order:

1. `00-how-to-play.md`
2. `01-pip-index-basics.md`
3. `02-package-build-artifacts.md`
4. `03-legacy-vs-modern-packaging.md`
5. `04-submission-and-certificates.md`
6. `05-reading-pip-output.md`
7. `06-submission-pr-workflow.md`

Each tutorial answers three questions:

- What am I looking at?
- What command do I run?
- What should I observe?

## What You Should Know After Reading

You should be comfortable with these words before you start the harder labs:

| Word | Plain meaning |
|---|---|
| virtual environment | a disposable Python install area for one project |
| pip | the installer that searches indexes and installs packages |
| index | a website or folder listing package files |
| candidate | one possible package file pip might install |
| resolver | pip's decision process for picking candidates |
| wheel | a built package file, usually `.whl` |
| sdist | a source archive that may need a build step |
| metadata | package name, version, dependencies, entry points, and file records |
| extra | optional dependency group, like `pkg[report]` |
| entry point | metadata that creates a command-line script |
| build isolation | a temporary environment for building a package |
| hash | a fingerprint of exact package file bytes |
| lockfile | a reproducible dependency decision record |

You do not need to memorize everything. You only need enough vocabulary to know
which file or command output to inspect.
