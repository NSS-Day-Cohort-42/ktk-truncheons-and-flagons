

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".view3")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitScore"){
            const scoresSubmitted = new CustomEvent("AllScoresSubmitted", {
                details:  {

                    scoresInfo: [
                       {
                        teamId: //how does this get value?
                        scores:
                       },
                       {
                        teamId: 
                        scores:
                       },
                       {
                        teamId: 
                        scores:
                       } 
                    ]
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
                <input id="team--${teamObject.id}" type="text" placeholder="enter round score here"></input>`
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