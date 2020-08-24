import { getTeams, useTeams } from "../Teams/TeamProvider.js";
import { savePlayer } from "./PlayerProvider.js";

const contentTarget = document.querySelector(".playerFormContainer");
const eventHub = document.querySelector(".container");

const render = (teams) => {
  contentTarget.innerHTML = `
    <div class="playerForm">
      <input class="playerForm__firstName" type="text" placeholder="First Name">
      <input class="playerForm__lastName" type="text" placeholder="Last Name">
      <input class="playerForm__country" type="text" placeholder="Country">
      <select class="playerForm__chooseTeam" id="chooseTeam">
        <option value="0">Please select a team...</option>
        ${teams
          .map((team) => `<option value=${team.id}>${team.name}</option>`)
          .join("")}
      </select>
      <button class="playerForm__createPlayer" id="createPlayer">Create Player</button>
    </div>
  `;
};

export const PlayerForm = () => {
  getTeams().then(() => {
    const teams = useTeams();
    render(teams);
  });
};

contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "createPlayer") {
    const firstName = document.querySelector(".playerForm__firstName").value;
    const lastName = document.querySelector(".playerForm__lastName").value;
    const country = document.querySelector(".playerForm__country").value;
    const chosenTeam = document.querySelector(".playerForm__chooseTeam").value;

    if (chosenTeam !== "0") {
      const player = {
        firstName: firstName,
        lastName: lastName,
        country: country,
        teamId: parseInt(chosenTeam),
      };
      savePlayer(player);
    } else alert("plzz choose a team");
  }
});

//if a team changes (added or, at some point, maybe? deleted), re-render the player creation form
//with a fresh copy of the teams data pulled in so the dropdown bar is accurate
eventHub.addEventListener("teamStateChanged", () => {
  const updatedTeams = useTeams();
  render(updatedTeams);
});
