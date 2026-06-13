# Scoreboard

This scoreboard is intentionally friendly. It should show progress and learning
status before pure ranking.

The first version reads static data from:

```text
assets/leaderboard.json
```

Later, the trusted scorer can update the same JSON file on the Pages branch.

<div class="scoreboard-toolbar">
  <label for="scoreboard-filter">Filter</label>
  <input id="scoreboard-filter" type="search" placeholder="team, tier, region" />
</div>

<div id="scoreboard-status" class="scoreboard-status">Loading scoreboard...</div>
<div id="scoreboard-root" class="scoreboard-root"></div>

## Certificate Tiers

| Tier | Suggested Requirement |
|---|---|
| Participation | 3 valid flags |
| Explorer | 10 valid flags across at least 2 tracks |
| Completion | 21 valid flags across at least 5 tracks |
| Finisher | capstone plus defense checklist |

