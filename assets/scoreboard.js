(function () {
  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function matchesFilter(entry, filter) {
    if (!filter) {
      return true;
    }
    return [
      entry.team_id,
      entry.display_name,
      entry.region,
      entry.tier,
      entry.latest_flag,
    ].some(function (value) {
      return normalize(value).includes(filter);
    });
  }

  function renderTable(root, entries) {
    if (!entries.length) {
      root.innerHTML = "<p>No matching teams yet.</p>";
      return;
    }

    var rows = entries
      .map(function (entry, index) {
        var cert = entry.certificate_eligible ? "Yes" : "Not yet";
        return [
          "<tr>",
          "<td>" + (index + 1) + "</td>",
          "<td><strong>" + entry.display_name + "</strong><br><span>" + entry.team_id + "</span></td>",
          "<td>" + entry.region + "</td>",
          "<td>" + entry.flags + "</td>",
          "<td>" + entry.tracks + "</td>",
          "<td><span class=\"scoreboard-tier\">" + entry.tier + "</span></td>",
          "<td>" + entry.latest_flag + "</td>",
          "<td>" + cert + "</td>",
          "</tr>",
        ].join("");
      })
      .join("");

    root.innerHTML = [
      "<table class=\"scoreboard-table\">",
      "<thead>",
      "<tr>",
      "<th>#</th>",
      "<th>Team</th>",
      "<th>Region</th>",
      "<th>Flags</th>",
      "<th>Tracks</th>",
      "<th>Tier</th>",
      "<th>Latest</th>",
      "<th>E-cert</th>",
      "</tr>",
      "</thead>",
      "<tbody>",
      rows,
      "</tbody>",
      "</table>",
    ].join("");
  }

  function initScoreboard() {
    var root = document.getElementById("scoreboard-root");
    var status = document.getElementById("scoreboard-status");
    var filterInput = document.getElementById("scoreboard-filter");
    if (!root || !status) {
      return;
    }

    fetch("../assets/leaderboard.json")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Could not load leaderboard.json");
        }
        return response.json();
      })
      .then(function (data) {
        var entries = data.entries || [];
        status.textContent = "Updated: " + (data.updated_at || "unknown");
        function redraw() {
          var filter = normalize(filterInput && filterInput.value);
          renderTable(
            root,
            entries.filter(function (entry) {
              return matchesFilter(entry, filter);
            })
          );
        }
        if (filterInput) {
          filterInput.addEventListener("input", redraw);
        }
        redraw();
      })
      .catch(function (error) {
        status.textContent = error.message;
        root.innerHTML = "";
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScoreboard);
  } else {
    initScoreboard();
  }
})();

