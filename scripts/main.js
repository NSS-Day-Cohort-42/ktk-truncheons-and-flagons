import { PlayerForm } from "./Players/PlayerForm.js";
import { TeamForm } from "./Teams/TeamForm.js";
import { teamSelect } from "./Teams/TeamSelect.js";
import { StartGame } from "./Start/StartGame.js";
import { ScoreList, testTeamArray } from "./Scores/ScoreList.js";

StartGame();
PlayerForm();
TeamForm();
teamSelect();
ScoreList(testTeamArray);
