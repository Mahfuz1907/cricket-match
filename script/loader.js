const loaderSelectTeamActive = () => {
  document
    .getElementById("loader-select-team-button")
    .classList.remove("hidden");
  document.getElementById("select-team-button").classList.add("hidden");
  document.getElementById("group").classList.add("hidden");
};

const loaderSelectTeamRemove = () => {
  document.getElementById("loader-select-team-button").classList.add("hidden");
  document.getElementById("select-team-button").classList.remove("hidden");
  document.getElementById("group").classList.remove("hidden");
};
