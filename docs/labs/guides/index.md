# Lab Guides

These guides live inside the Labs section. The required background for each flag
lives inside that flag page, so you can usually stay on the page while solving.

Use this section when you want to review vocabulary, commands, pip output,
history, or submission flow without opening every lab.

Recommended reading order:

1. [How To Play Labs](how-to-play.md)
2. [Pip Index Basics](pip-index-basics.md)
3. [Package Build Artifacts](package-build-artifacts.md)
4. [Legacy Vs Modern Packaging](legacy-vs-modern-packaging.md)
5. [Reading Pip Output](reading-pip-output.md)
6. [Submission And Certificates](submission-and-certificates.md)
7. [Submission PR Workflow](submission-pr-workflow.md)

Each guide answers three questions:

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
