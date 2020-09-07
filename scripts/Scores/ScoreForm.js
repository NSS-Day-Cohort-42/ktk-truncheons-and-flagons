

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".gameContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitScore"){

        //all inputs in an array [{1}, {2}, {3}]
        const allInputNodesList = document.querySelectorAll(".teamScore")

        const specificValues = []

        for(const node of allInputNodesList) {
            //get the teamId from node
            //get the score from the node (.value)
            //return an object 
            const teamId = node.id.split("--")[1]
            const score = node.value

            specificValues.push({
                teamId: teamId,
                score: score 
            })
        }

        const scoresSubmitted = new CustomEvent("AllScoresSubmitted", {
            detail:  {
                scoresInfo: specificValues
            }
        })

        eventHub.dispatchEvent(scoresSubmitted)
    }
})



const render = (arrayOfTeams) => {
    
    contentTarget.innerHTML = `
       <section class="scoreForm">
       <div class="teamNameScores">
       <h3 class="scoreFormTitle">Round Scores</h4>
        ${
            arrayOfTeams.map(teamObject => {
                return `<div id="teamName--${teamObject.id}" class="teamScores">${teamObject.name}
                <input id="team--${teamObject.id}" class="teamScore" type="text" placeholder="enter score"></input>
                </div>`
            }).join("")
        }
            <button id="submitScore">Save Round Score</button>
            </div>
        </section>

    `
    
    
}




//arrTeams is an array of objects
export const scoreForm = (arrTeams) => {
 render(arrTeams)
    
}