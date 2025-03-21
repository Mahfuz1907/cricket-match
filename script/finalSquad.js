let finalSquad1 = [];
let finalSquad2 = [];
let i1 = 0,
  i2 = 0;

const finalXI1 = (squad) => {
  i1++;

  if (i1 > 11) {
    Swal.fire({
      title: "Sorry!",
      text: "You have already selected 11 Players",
      icon: "warning", // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
  } else {
    const finalTable1 = document.getElementById("final-table-team-1");

    finalSquad1.push({
      player: `player${i1}`,
      name: squad.name,
      runScored: "",
      bowlTaken: "",
      wicket: "",
      overBowled: "",
      runConceded: "",
    });

    let eachRow = document.createElement("tr");
    eachRow.innerHTML = `<td class="cursor-pointer">${
      finalSquad1[i1 - 1].name
    }</td>`;
    finalTable1.appendChild(eachRow);
  }
};

const finalXI2 = (squad) => {
  i2++;

  if (i2 > 11) {
    Swal.fire({
      title: "Sorry!",
      text: "You have already selected 11 Players",
      icon: "warning", // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
  } else {
    const finalTable2 = document.getElementById("final-table-team-2");

    finalSquad2.push({
      player: `player${i2}`,
      name: squad.name,
      runScored: "",
      bowlTaken: "",
      wicket: "",
      overBowled: "",
      runConceded: "",
    });

    let eachRow = document.createElement("tr");
    eachRow.innerHTML = `<td class="cursor-pointer">${
      finalSquad2[i2 - 1].name
    }</td>`;
    finalTable2.appendChild(eachRow);
  }
};
