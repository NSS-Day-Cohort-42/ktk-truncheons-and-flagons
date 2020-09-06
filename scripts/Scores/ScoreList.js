//const contentTarget = document.querySelector(".gameContainer");

export const ScoreList = (teams) => {
  const contentElement = document.querySelector(".scoreForm")
  const scoreListHTML = `
          <div class="tableDiv">
            <table class="tableElement">
                <tr class="tableHeader">
                    <th>Team</th><th>Current Score</th>
                </tr>    
                    ${teams
                      .map((team) => {
                        return `<tr class="tableRows"><td>${team.name}</td><td class="scoresNumber">${team.score}</td></tr>`;
                      })
                      .join("")}
            </table>    
            </div>
    `;

  contentElement.innerHTML += scoreListHTML;
};
