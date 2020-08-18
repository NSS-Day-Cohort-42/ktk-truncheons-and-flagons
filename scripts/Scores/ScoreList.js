const contentTarget = document.querySelector(".view3");

export const ScoreList = (teams) => {
  const scoreListHTML = `
            <table>
                <tr>
                    <th>Team</th><th>Current Score</th>
                </tr>    
                    ${teams
                      .map((team) => {
                        return `<tr><td>${team.name}</td><td>${team.score}</td></tr>`;
                      })
                      .join("")}
            <table>    
    `;

  contentTarget.innerHTML += scoreListHTML;
};
