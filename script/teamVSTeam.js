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
  console.log(team1);
  console.log(team2);

  if (team1.id === team2.id) {
    Swal.fire({
      title: "Sorry!",
      text: "Both Teams can not be same",
      icon: "error", // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "Excellent!",
      text: `Today your match is ${team1.name} vs ${team2.name}`,
      icon: "success", // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
  }
};
