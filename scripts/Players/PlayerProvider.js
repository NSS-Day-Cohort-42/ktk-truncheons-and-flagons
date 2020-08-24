const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const PlayerStateChangedEvent = new CustomEvent("PlayerStateChanged");
  eventHub.dispatchEvent(PlayerStateChangedEvent);
};

let players = [];

export const getPlayers = () => {
  return fetch("http://localhost:8088/players")
    .then((resp) => resp.json())
    .then((parseplays) => {
      players = parseplays;
    });
};

export const usePlayers = () => {
  return players.slice();
};

export const savePlayer = (player) => {
  return fetch("http://localhost:8088/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  })
    .then(getPlayers)
    .then(dispatchStateChangeEvent);
};
