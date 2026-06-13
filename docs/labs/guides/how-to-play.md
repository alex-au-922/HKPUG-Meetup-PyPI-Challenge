# How To Play

This page assumes you are new to packaging CTFs. That is fine. The labs are
supposed to teach you the objects one at a time.

!!! danger "Stay inside the sandbox"
    **Do not use real PyPI. Do not use real package names. Do not read real
    credentials. Do not call external servers.**

    Every lab uses toy indexes, toy packages, and fake flags.

## What You Are Doing

Each lab gives you a small fake software project. Something about its package
installation is unsafe.

Your job is to answer:

1. What package did pip choose?
2. Where did pip get it from?
3. Why did pip choose that one?
4. What code or metadata caused the fake flag to appear?
5. How would you fix the project?

That is the whole game.

## The Important Pieces

Think of the challenge like this:

```text
pip command -> package index -> package file -> install/build/import/run -> fake flag
```

You are usually trying to control one part of that chain.

## The Lab Loop

For each flag:

1. Read the story.
2. Look at the files before running anything.
3. Run the provided command.
4. Read pip's output carefully.
5. Inspect the package or index.
6. Make one small change or choose one install path.
7. Capture the fake flag under `artifacts/`.
8. Write one short explanation.

## What Counts As A Solve

A good solve has three parts:

- the flag
- the proof of how it happened
- the fix or defense

For example:

```text
Flag: HKPUG{practice.flag-04}
Why: pip selected hkpug-ctf-internal-utils 9.9.9 from public-sim because the
victim used --extra-index-url and the public-sim version was higher.
Fix: remove --extra-index-url for private package names and use a trusted index.
```

## Where Flags Go

Most labs write proof under:

```text
artifacts/
```

If a lab prints a flag instead, copy the printed value into your answer bundle.

## When You Are Stuck

Do not search randomly. Ask these questions in order:

1. What exact `pip install` command is being run?
2. Which index URL is first?
3. Is there an `--extra-index-url`?
4. What package name is pip normalizing?
5. What version did pip choose?
6. Did pip install a wheel or build from an sdist?
7. Did the flag appear during build, install, import, or command execution?

The final mile is yours: the flag page tells you where to look, but each lab
still expects you to connect the last few dots.
