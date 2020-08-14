import { StartGame } from "../Start/StartGame.js"
import { teamSelect } from "../Teams/TeamSelect.js"

const eventHub = document.querySelector(".container")

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

// User selected the three teams from TeamSelect - save them in app state and go to the next state
eventHub.addEventListener("AllTeamsSelected", event => {
  const teams = event.detail.teamIds
  state.teams = teams

  progressToNextGameState()
})

// User saved round scores for the teams - update the teams' scores in app state and progress to the next round, or if this event happened for the third round, reset application state and jump back to initial state
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

  if(state.round <= 3) {
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
      StartGame()
      break
    case "teamSelect":
      teamSelect()
      break
    case "scoreForm":
      // ScoreForm(state.teams, state.round)
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