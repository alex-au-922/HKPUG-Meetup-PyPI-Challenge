# Scoreboard

This scoreboard is intentionally friendly. It should show progress and learning
status before pure ranking.

The first version reads static data from:

```text
assets/leaderboard.json
```

During an official event, the progress board can be updated as submissions are
scored. Hint multipliers may affect the maximum score for a flag.

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

For the public challenge flow, hint state can be global per flag:

| State | Max Score |
|---|---:|
| Fresh | 100% |
| Hint 1 open | 85% |
| Hint 2 open | 70% |
| Guided open | 50% |

Official events may use public or private hints. The event announcement will
state how hint usage affects scoring.
