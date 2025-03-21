document.getElementById("select-team-button").classList.add("hidden");
document.getElementById("confirm-div").classList.add("hidden");

const selectTeamButton = () => {
  document.getElementById("select-team-button").classList.remove("hidden");
  document.getElementById("confirm-div").classList.remove("hidden");
  document.getElementById("start-div").classList.add("hidden");
  document.getElementById("team-button").classList.add("hidden");

  loaderSelectTeamActive();
  fetch("../api/squads.json")
    .then((res) => res.json())
    .then((data) => displaySeletctTeamButton(data.teams));
};

const displaySeletctTeamButton = (selectTeam) => {
  const team1Button = document.getElementById("team-first-button");
  const team2Button = document.getElementById("team-second-button");
  team1Button.innerHTML = "";
  team2Button.innerHTML = "";
  for (let team of selectTeam) {
    let teamButton1 = document.createElement("button");
    let teamButton2 = document.createElement("button");

    teamButton1.classList = `cursor-pointer rounded-md text-white text-lg font-bold px-5 py-2 bg-[${team.team_colour}] hover:bg-white hover:border-[1px] hover:border-[${team.team_colour}] hover:text-[${team.team_colour}]`;
    teamButton2.classList = `cursor-pointer rounded-md text-white text-lg font-bold px-5 py-2 bg-[${team.team_colour}] hover:bg-white hover:border-[1px] hover:border-[${team.team_colour}] hover:text-[${team.team_colour}]`;
    teamButton1.innerHTML = `${team.name}`;
    teamButton2.innerHTML = `${team.name}`;

    teamButton1.onclick = () => {
      selectTeam1(team);
    };

    teamButton2.onclick = () => {
      selectTeam2(team);
    };

    team1Button.appendChild(teamButton1);
    team2Button.appendChild(teamButton2);
  }
  loaderSelectTeamRemove();
};
