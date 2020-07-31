let teams = [];

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const teamStateChangedEvent = new CustomEvent("teamStateChanged");

  eventHub.dispatchEvent(teamStateChangedEvent);
};

export const saveTeam = (team) => {
  const jsonTeam = JSON.stringify(team)

  return fetch("http://localhost:8088/teams", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: jsonTeam
  })
    .then(getTeams)
    .then(dispatchStateChangeEvent)
}

export const useTeams = () => teams.slice();

export const getTeams = () => {
  return fetch("http://localhost:8088/teams")
  .then((res) => res.json())
  .then((teamData) => {
    teams = teamData;
  });
  
};





