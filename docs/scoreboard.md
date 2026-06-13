# Scoreboard

Use the scoreboard to check progress, certificate tier, and hint-adjusted score
state.

Scores are useful, but they are not the whole point. A good solve also includes
a clear explanation of what happened and how to defend it.

<div class="scoreboard-toolbar">
  <label for="scoreboard-filter">Filter</label>
  <input id="scoreboard-filter" type="search" placeholder="team, tier, region" />
</div>

<div id="scoreboard-status" class="scoreboard-status">Loading scoreboard...</div>
<div id="scoreboard-root" class="scoreboard-root"></div>

## Certificate Tiers

| Tier | Requirement |
|---|---|
| Participation | 2 valid flags |
| Explorer | 5 valid flags including one resolver/build flag |
| Completion | 9 valid flags |
| Finisher | capstone plus defense checklist |

## Hint Multipliers

Hint state can affect the maximum score:

| State | Max Score |
|---|---:|
| Fresh | 100% |
| Hint 1 open | 85% |
| Hint 2 open | 70% |
| Guided open | 50% |

Check the event notes for the exact scoring rule before you submit.
