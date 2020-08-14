// DUMMY FUNCTIONS -- THESE WILL BE IMPORTS WHEN THE RELEVANT COMPONENTS ARE WRITTEN:
const StartGameButton = () => "<h1>Start Game Button</h1>"
const TeamSelect = () => "<h1>Team Select</h1>"
const ScoreForm = () => "<h1>Score Form</h1>"

const eventHub = document.querySelector(".container")

const view1Target = document.querySelector(".view--1")
const view2Target = document.querySelector(".view--2")
const view3Target = document.querySelector(".view--3")

const gameStates = [ "gameStart", "teamSelect", "scoreForm" ]

const state = {
  currentState: 0,
  teams: [],
  round: 1
}

// User clicked on "Start Game" button - go to next game state mode and render it
eventHub.addEventListener("startGameButtonClicked", () => {
  progressToNextGameState()
})

eventHub.addEventListener("allTeamsSelected", event => {
  const teams = event.detail.teams
  state.teams = teams

  progressToNextGameState()
})

eventHub.addEventListener("roundSaved", event => {
  // going to pretend "scores" is array of objects { teamId: id, score: <the score for this round for this team> }
  const scores = event.detail.scores

  // update the total score for each team
  scores.forEach(scoreInfo => {
    const foundTeam = state.teams.find(team => team.id === scoreInfo.teamId)
    foundTeam.score += scoreInfo.score
  })

  // move on to the next round
  state.round += 1

  if(round <= 3) {
    renderCurrentComponent()
  }
  else {
    // save each score data for each team to scoreprovider
    // then reset game to start
    state.teams = []
    state.round = 1
    progressToNextGameState()
  }
})

export const GameMaster = () => {
  renderCurrentComponent()
}

const renderCurrentComponent = () => {
  const currentState = gameStates[state.currentState]

  switch(currentState) {
    case "gameStart":
      view1Target.innerHTML = StartGameButton()
      break
    case "teamSelect":
      view2Target.innerHTML = TeamSelect()
      break
    case "scoreForm":
      view3Target.innerHTML = ScoreForm(state.teams, state.round)
      break
  }
}

const progressToNextGameState = () => {
  state.currentState++;
  if(state.currentState >= gameStates.length) {
    state.currentState = 0;
  }

  renderCurrentComponent()
}