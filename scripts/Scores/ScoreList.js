//const contentTarget = document.querySelector(".gameContainer");

export const ScoreList = (teams) => {
  const contentElement = document.querySelector(".scoreForm")
  const scoreListHTML = `
            <table class="tableElement">
                <tr>
                    <th>Team</th><th>Current Score</th>
                </tr>    
                    ${teams
                      .map((team) => {
                        return `<tr><td>${team.name}</td><td>${team.score}</td></tr>`;
                      })
                      .join("")}
            </table>    
    `;

  contentElement.innerHTML += scoreListHTML;
};
