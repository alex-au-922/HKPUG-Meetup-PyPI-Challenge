# Scoreboard

This scoreboard is intentionally friendly. It should show progress and learning
status before pure ranking.

The first version reads static data from:

```text
assets/leaderboard.json
```

Later, the trusted scorer can update the same JSON file on the Pages branch.
The same scorer can also apply hint multipliers.

<div class="scoreboard-toolbar">
  <label for="scoreboard-filter">Filter</label>
  <input id="scoreboard-filter" type="search" placeholder="team, tier, region" />
</div>

<div id="scoreboard-status" class="scoreboard-status">Loading scoreboard...</div>
<div id="scoreboard-root" class="scoreboard-root"></div>

## Certificate Tiers

| Tier | Suggested Requirement |
|---|---|
| Participation | 2 valid flags |
| Explorer | 5 valid flags including one resolver/build flag |
| Completion | 9 valid flags |
| Finisher | capstone plus defense checklist |

## Hint Multipliers

For the MVP, hint state can be global per flag:

| State | Max Score |
|---|---:|
| Fresh | 100% |
| Hint 1 open | 85% |
| Hint 2 open | 70% |
| Guided open | 50% |

For a later private tracked hint system, the scorer can store per-team unlocks
and apply the multiplier only to teams that requested hints.
