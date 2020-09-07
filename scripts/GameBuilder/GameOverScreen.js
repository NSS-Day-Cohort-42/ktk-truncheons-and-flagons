const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".gameContainer")

eventHub.addEventListener("click", event => {
  if(event.target.id === "backToStart") {
    const backToStartEvent = new CustomEvent("backToStartButtonClicked")
    eventHub.dispatchEvent(backToStartEvent);
  }
})

const render = teams => {
  teams.sort((currentTeam, nextTeam) => nextTeam.score - currentTeam.score)

  contentTarget.innerHTML = `
    <div class="game-over-container">
      <h2 class="game-over-text">Game Over</h2>
      <p class="winning-team">Congratulations, ${ teams[0].name }!!! You trunched and/or flagoned better than the rest!</p>
      <p class="game-final-ranking__header">Final Scores:</p>
      <ol class="game-final-ranking">
        ${ teams.map(team => `<li class="game-final-ranking__team">${team.name} (Score: ${team.score})</li>`).join("") }
      </ol>
      <button id="backToStart">Back to Start</button>
    </div>
  `
}

export const GameOverScreen = teams => {
  render(teams);
}
