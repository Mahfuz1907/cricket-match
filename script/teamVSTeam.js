document.getElementById("score-team-1").classList.add("hidden");
document.getElementById("score-team-2").classList.add("hidden");

let team1, team2;

const selectTeam1 = (team) => {
  team1 = team;
  return team1;
};

const selectTeam2 = (team) => {
  team2 = team;
  return team2;
};

const selectTeam = () => {
  if (team1.id === team2.id) {
    Swal.fire({
      title: "Sorry!",
      text: "Both Teams can not be same",
      icon: "error", // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
  } else {
    document.getElementById("confirm-div").classList.add("hidden");
    document.getElementById("select-team-button").classList.add("hidden");
    document.getElementById("group").classList.add("hidden");
    Swal.fire({
      title: "Excellent!",
      text: `Today your match is ${team1.name} vs ${team2.name}`,
      icon: "success", // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
  }

  const teamVsTeam = document.getElementById("teamVsTeam");
  teamVsTeam.innerHTML = `<div class="card bg-base-100 shadow-sm flex flex-col justify-center items-center mx-auto">
        <figure class="px-5 pt-5">
          <img src="${team1.image}" alt="Shoes" class="rounded-xl w-64 h-32" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-black text-2xl text-[${team1.team_colour}]">
            ${team1.name}
          </h2>
          <div id="squad-team-1" class = "flex flex-col gap-3">
            
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 shadow-sm flex flex-col justify-center items-center mx-auto">
        <figure class="px-5 pt-5">
          <img src="${team2.image}" alt="Shoes" class="rounded-xl w-64 h-32" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-black text-2xl text-[${team2.team_colour}]">
            ${team2.name}
          </h2>
          <div id="squad-team-2"  class = "flex flex-col gap-3">
            
          </div>
        </div>
      </div>`;

  const squadTeam1 = document.getElementById("squad-team-1");
  const squadTeam2 = document.getElementById("squad-team-2");

  for (let sqt1 of team1.players) {
    let sqt1button = document.createElement("button");
    sqt1button.id = `${sqt1.id}`;
    sqt1button.classList = `cursor-pointer hover:border-[1px] hover:border-[${team1.team_colour}] hover:text-[${team1.team_colour}] text-white text-bold text-lg hover:bg-white bg-[${team1.team_colour}] rounded-lg px-5 py-2`;
    sqt1button.innerHTML = `${sqt1.name}`;
    sqt1button.onclick = () => {
      finalXI1(sqt1);
    };

    squadTeam1.appendChild(sqt1button);
  }

  for (let sqt2 of team2.players) {
    let sqt2button = document.createElement("button");
    sqt2button.id = `${sqt2.id}`;
    sqt2button.classList = `cursor-pointer hover:border-[1px] hover:border-[${team2.team_colour}] hover:text-[${team2.team_colour}] text-white text-bold text-lg hover:bg-white bg-[${team2.team_colour}] rounded-lg px-5 py-2`;
    sqt2button.innerHTML = `${sqt2.name}`;
    sqt2button.onclick = () => {
      finalXI2(sqt2);
    };
    squadTeam2.appendChild(sqt2button);
  }

  const scoreTeam1 = document.getElementById("score-team-1");
  const scoreTeam2 = document.getElementById("score-team-2");
  scoreTeam1.classList.remove("hidden");
  scoreTeam2.classList.remove("hidden");
  let scT1 = document.createElement("table");
  let scT2 = document.createElement("table");
  scT1.classList = "table";
  scT2.classList = "table";
  scT1.innerHTML = `<thead class="bg-[${team1.team_colour}] text-white text-bold text-base">
              <tr>
                <th>Name</th>
                <th>Run Scored</th>
                <th>Wicket</th>
                <th>Over Bowled</th>
              </tr>
            </thead>
            <tbody id="final-table-team-1"></tbody>`;

  scT2.innerHTML = `<thead class="bg-[${team2.team_colour}] text-white text-bold text-base">
              <tr>
                <th>Name</th>
                <th>Run Scored</th>
                <th>Wicket</th>
                <th>Over Bowled</th>
              </tr>
            </thead>
            <tbody id="final-table-team-2"></tbody>`;

  scoreTeam1.appendChild(scT1);
  scoreTeam2.appendChild(scT2);
};
