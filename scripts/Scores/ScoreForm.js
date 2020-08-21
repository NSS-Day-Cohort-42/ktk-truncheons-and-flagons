

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".view3")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitScore"){
        //store querySelected items in variable?
            
        const allInputNodes = document.querySelectorAll(".teamScore")
        //all inputs in an array [{1}, {2}, {3}]

        //get the teamId from node
        //get the score from the node (.value)
        //return an object 
        const specificValues = allInputNodes.map(node => {
            const teamId = node.id.split("--")[1]
            const score = node.value

            return {
                teamId: teamId,
                score: score 
            }

        })

            const scoresSubmitted = new CustomEvent("AllScoresSubmitted", {
                detail:  {
                    scoresInfo: specificValues
                }
            })

        dispatchEvent(scoresSubmitted)
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