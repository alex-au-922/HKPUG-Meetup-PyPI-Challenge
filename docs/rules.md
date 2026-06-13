# Rules

!!! danger "Do not use real targets"
    **Do not upload challenge packages to real PyPI.**

    **Do not target real package names, real maintainers, real companies, or
    real organizations.**

!!! warning "No real secrets"
    **Do not read real credentials, tokens, SSH keys, browser data, cloud
    credentials, or files outside the challenge workspace.**

    The labs use fake flags such as `HKPUG{practice.flag-04}`.

!!! warning "No external callbacks"
    **Do not contact external callback servers, webhooks, pastebins, or logging
    endpoints from challenge package code.**

    Safe flag capture happens locally under `artifacts/`.

!!! success "What is allowed"
    You may safely:

    - point pip at the provided challenge indexes
    - inspect toy `/simple/` index pages
    - build toy wheels and source distributions inside this repo
    - run victim apps inside the challenge workspace
    - write fake flag proof under `artifacts/`
    - explain and patch the vulnerable configuration

## Challenge Boundary

This CTF is about learning how package indexes, resolvers, and package artifacts
work. The goal is to prove control inside the sandbox, then explain the defense.

If a technique would affect a real user, a real package, a real credential, or a
real service, it is outside the challenge boundary.

## Submission Rule

For official HKPUG mode, submit only the requested answer bundle or writeup.
Do not submit real exploit payloads, real secrets, or screenshots containing
private information.
