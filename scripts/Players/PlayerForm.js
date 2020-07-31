import { getTeams, useTeams } from "../Teams/TeamProvider.js"

const contentTarget = document.querySelector(".playerFormContainer")

const render = teams => {
  contentTarget.innerHTML = `
    <div class="playerForm">
      <input class="playerForm__firstName" type="text" placeholder="First Name">
      <input class="playerForm__lastName" type="text" placeholder="Last Name">
      <select class="playerForm__chooseTeam" id="chooseTeam">
        <option value="0">Please select a team...</option>
        ${
          teams
            .map(team => `<option value=${team.id}>${team.name}</option>`)
            .join("")
        }
      </select>
      <button class="playerForm__createPlayer" id="createPlayer">Create Player</button>
    </div>
  `
}

export const PlayerForm = () => {
  getTeams()
    .then(() => {
      const teams = useTeams()
      render(teams)
    })
}

contentTarget.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "createPlayer") {
    const firstName = document.querySelector(".playerForm__firstName").value
    const lastName = document.querySelector(".playerForm__lastName").value
    const chosenTeam = document.querySelector(".playerForm__chooseTeam").value

    const player = {
      firstName: firstName,
      lastName: lastName,
      team: parseInt(chosenTeam)
    }

    console.log(player)
  }
})