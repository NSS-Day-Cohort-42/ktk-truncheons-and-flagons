import { useTeams, getTeams } from "./TeamProvider.js";
import { getPlayers, usePlayers } from "../Players/PlayerProvider.js"

const contentTarget = document.querySelector(".gameContainer");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "goButton") {
    const select1 = document.querySelector(".teamSelect1");
    const select2 = document.querySelector(".teamSelect2");
    const select3 = document.querySelector(".teamSelect3");

    //conditional check for 3 unique ids
    const selectValues = [select1.value, select2.value, select3.value];
    let selectSet = new Set();
    selectValues.forEach((value) => {
      selectSet.add(value);
    });
    if (selectSet.size != 3 || selectSet.has("0")) {
      alert("please choose 3 unique teams!");
    } else {
      const AllTeamsSelected = new CustomEvent("AllTeamsSelected", {
        detail: {
          teamIds: [select1.value, select2.value, select3.value],
        },
      });
      eventHub.dispatchEvent(AllTeamsSelected);
    }
  }
});

const render = () => {
  const teamArr = useTeams();
  const players = usePlayers();

  const filteredTeams = teamArr.filter(team => {
    return players.filter(player => player.teamId === team.id).length === 3
  })

  contentTarget.innerHTML = `
      <div class="teamSelect">
        <select class="teamSelect1">
            <option value=0>Please select a team...</option>
            ${filteredTeams.map((team) => {
              return `<option value="${team.id}">${team.name}</option>`;
            })}
        </select>
        <select class="teamSelect2">
            <option value=0>Please select a team...</option>
            ${filteredTeams.map((team) => {
              return `<option value="${team.id}">${team.name}</option>`;
            })}
        </select>
        <select class="teamSelect3">
            <option value=0>Please select a team...</option>
            ${filteredTeams.map((team) => {
              return `<option value="${team.id}">${team.name}</option>`;
            })}
        </select>
        <button id="goButton">Go To Game</button>
      </div>
    `;
};

export const teamSelect = () => {
  getTeams().then(getPlayers).then(render);
};

