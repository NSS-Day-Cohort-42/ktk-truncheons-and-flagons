import { getScores, useScores } from "./ScoreProvider.js";
import { getPlayers, usePlayers } from "../Players/PlayerProvider.js";
import { getTeams, useTeams } from "../Teams/TeamProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".leaderboardContainer");

let scores = []
let players = []
let teams = []

export const LeaderBoard = () => {
    getScores()
        .then(getTeams)
        .then(getPlayers)
        .then(() => {
            scores = useScores()
            players = usePlayers()
            teams = useTeams()
            render();
        })
        ;
};

const render = () => {
    const leaderboardHTML = `
          <div class="tableDiv">
            <table class="tableElement">
                <tr class="tableHeader">
                    <th>Team</th><th>Number of Players</th><th>All-time Score</th>
                </tr>    
                    ${teams
                      .map((team) => {
                          return `<tr class="tableRows">
                                    <td>${team.name}</td>
                                    <td class="scoresNumber">${players.filter(
                                            player => {
                                                return player.teamId === team.id
                                            }
                                            ).length}</td>
                        <td class="scoresNumber">${scores.filter(
                            scoreObject => {
                                return scoreObject.teamId === team.id
                            }
                          ).reduce((totalScore, score) => {
                            return totalScore + score.points
                        }, 0)}</td>
                        </tr>`;
                    
                      })
                      .join("")}
            </table>    
            </div>
    `;

  contentTarget.innerHTML = leaderboardHTML;
}

eventHub.addEventListener("teamStateChanged", () => {
    teams = useTeams()
    render()
})

eventHub.addEventListener("PlayerStateChanged", () => {
    players = usePlayers()
    render()
})

eventHub.addEventListener("scoreStateChanged", () => {
    scores = useScores()
    render()
})