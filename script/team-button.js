fetch("../api/squads.json")
  .then((res) => res.json())
  .then((data) => displayTeamButton(data.teams));

const displayTeamButton = (teams) => {
  const teamButton = document.getElementById("team-button");
  for (let team of teams) {
    let eachTeam = document.createElement("button");
    eachTeam.classList = `boldonse flex flex-row justify-center items-center gap-10 cursor-pointer text-white font-bold text-xl bg-[${team.team_colour}] hover:bg-white hover:border-[${team.team_colour}] hover:border-2 hover:text-[${team.team_colour}] px-5 py-3 rounded-lg`;
    eachTeam.id = `${team.id}`;
    eachTeam.innerHTML = `${team.name} <i onclick="displayTeamDetails('${team.id}')" class="fa-solid fa-circle-info"></i>`;

    teamButton.appendChild(eachTeam);
  }
};

const displayTeamDetails = (teamDetail) => {
  const teamDetails = document.getElementById("my_modal_5");
  my_modal_5.showModal();

  fetch("../api/squads.json")
    .then((res) => res.json())
    .then((data) => {
      for (let details of data.teams) {
        if (details.id === teamDetail) {
          let eachTeamDetail = document.createElement("div");
          eachTeamDetail.classList =
            "modal-box flex flex-col justify-center items-center gap-10 bg-[#ada5a5]";
          eachTeamDetail.innerHTML = `<div class="modal-img flex justify-center items-center">
          <img
            src="${details.image}"
            alt=""
            class="w-80 h-60 rounded-xl"
          />
        </div>
        <div class="modal-content">
          <ul class="flex flex-col justify-center items-center gap-3">
            <li>Team Name: <span class="text-[${details.team_colour}] text-xl font-bold">${details.name}</span></li>
            <li>Short Name: <span class="text-[${details.team_colour}] text-xl font-bold">${details.short_name}</span></li>
            <li>Group: <span class="text-[${details.team_colour}] text-xl font-bold">${details.group}</span></li>
            <li>Captain: <span class="text-[${details.team_colour}] text-xl font-bold">${details.captain}</span></li>
            <li>Vice Captain: <span class="text-[${details.team_colour}] text-xl font-bold">${details.vice_captain}</span></li>
          </ul>
        </div>`;

          teamDetails.appendChild(eachTeamDetail);
        }
      }
    });
};
