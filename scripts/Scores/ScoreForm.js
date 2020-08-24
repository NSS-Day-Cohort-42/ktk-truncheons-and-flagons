

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".view3")

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
       <section class="scoreForm>
        ${
            arrayOfTeams.map(teamObject => {
                return `<div id="teamName--${teamObject.id}">${teamObject.name}</div>
                <input id="team--${teamObject.id}" class="teamScore" type="text" placeholder="enter round score here"></input>`
            }).join("")
        }
            <button id="submitScore">Save Round Score</button>
        </section>

    `
    
    
}




//arrTeams is an array of objects
export const scoreForm = (arrTeams) => {
 render(arrTeams)
    
}