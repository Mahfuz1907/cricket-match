fetch("../api/squads.json")
  .then((res) => res.json())
  .then((data) => displayGroup(data.teams));

const displayGroup = (teams) => {
  const groupA = document.getElementById("group-A");
  const groupB = document.getElementById("group-B");
  for (let team of teams) {
    let dataA = document.createElement("td");
    let dataB = document.createElement("td");

    dataA.classList = `uppercase text-${team.team_colour}`;
    dataB.classList = `uppercase text-${team.team_colour}`;

    if (team.group === "A") {
      dataA.innerHTML = `${team.name}`;
      groupA.appendChild(dataA);
    }

    if (team.group === "B") {
      dataB.innerHTML = `${team.name}`;
      groupB.appendChild(dataB);
    }
  }
};
