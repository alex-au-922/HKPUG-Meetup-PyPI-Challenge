# MkDocs And Scoreboard Plan

Use the same repository:

- `main` stores source docs, labs, and challenge assets
- `gh-pages` stores the generated MkDocs site
- GitHub Pages serves the tutorial site

This keeps the public working repo and participant tutorial site in sync.

## Scoreboard Model

The MkDocs page at `scoreboard.md` reads:

```text
docs/assets/leaderboard.json
```

During development, this file contains demo data.

In hosted mode, the trusted scorer should update the generated Pages branch
with a real `assets/leaderboard.json` or commit the source JSON and redeploy.

Recommended fields:

```json
{
  "team_id": "hk-01",
  "display_name": "Team Name",
  "region": "Hong Kong",
  "flags": 7,
  "tracks": 3,
  "tier": "Explorer",
  "latest_flag": "flag-07",
  "score": 70,
  "certificate_eligible": true
}
```

## GitHub Pages Deployment

The workflow should:

1. install MkDocs dependencies
2. build the site
3. publish the generated site to the `gh-pages` branch
4. serve GitHub Pages from that branch

When the repo is ready to go public, enable Pages from the `gh-pages` branch in
repository settings.
