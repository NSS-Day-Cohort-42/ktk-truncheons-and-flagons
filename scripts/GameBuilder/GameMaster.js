import { StartGame } from "../Start/StartGame.js";
import { teamSelect } from "../Teams/TeamSelect.js";
import { ScoreList } from "../Scores/ScoreList.js";
import { scoreForm } from "../Scores/ScoreForm.js";
import { useTeams } from "../Teams/TeamProvider.js";

const eventHub = document.querySelector(".container");

const ROUND_LIMIT = 3;

const gameStates = ["gameStart", "teamSelect", "scoreForm"];

const state = {
  currentState: 0,
  teams: [],
  round: 1,
};

// User clicked on "Start Game" button - go to next game state mode and render it
eventHub.addEventListener("startGameButtonClicked", () => {
  progressToNextGameState();
});

// User selected the three teams from TeamSelect - grab the full team objects from teams array, initialize their scores to 0 for the game, assign them to GameMaster application state teams, move on to next game state
eventHub.addEventListener("AllTeamsSelected", (event) => {
  const teamIds = event.detail.teamIds;
  const allTeams = useTeams();

  const selectedTeamObjects = teamIds.map((teamId) => {
    const foundTeam = allTeams.find((team) => team.id === parseInt(teamId));
    foundTeam.score = 0;
    return foundTeam;
  });
  state.teams = selectedTeamObjects;

  progressToNextGameState();
});

// User saved round scores for the teams - update the teams' scores in app state and progress to the next round, or if this event happened for the third round, reset application state and jump back to initial state
eventHub.addEventListener("AllScoresSubmitted", (event) => {
  // going to pretend "scores" is array of objects { teamId: id, score: <the score for this round for this team> }
  const scoresInfo = event.detail.scoresInfo;

  // update the total score for each team
  scoresInfo.forEach((scoreInfo) => {
    const foundTeam = state.teams.find(
      (team) => team.id === parseInt(scoreInfo.teamId)
    );
    foundTeam.score += parseInt(scoreInfo.score);
  });

  // move on to the next round
  state.round += 1;

  if (state.round <= ROUND_LIMIT) {
    renderCurrentComponent();
  } else {
    console.log("all threee happened!");
    progressToNextGameState();
  }
});

export const GameMaster = () => {
  renderCurrentComponent();
};

const renderCurrentComponent = () => {
  const currentState = gameStates[state.currentState];

  switch (currentState) {
    case "gameStart":
      StartGame();
      break;
    case "teamSelect":
      teamSelect();
      break;
    case "scoreForm":
      scoreForm(state.teams);
      ScoreList(state.teams);
      break;
  }
};

const progressToNextGameState = () => {
  state.currentState++;

  if (state.currentState >= gameStates.length) {
    resetGameState();
  }

  renderCurrentComponent();
};

const resetGameState = () => {
  state.currentState = 0;
  state.teams = [];
  state.round = 1;
};
