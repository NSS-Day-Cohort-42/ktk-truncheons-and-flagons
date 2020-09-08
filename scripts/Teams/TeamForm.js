import { saveTeam } from "./TeamProvider.js"

const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".teamFormContainer")

eventHub.addEventListener("click",clickEvent=>{
    if (clickEvent.target.id==="createTeam"){
        const teamName=document.querySelector(".teamForm__name").value
        if(teamName === "") {
            alert("Your team has to have a name, come on bro")
        }
        else {
            const newTeam={
                "name":teamName,
                "dateCreated":Date.now()
            }
            saveTeam(newTeam)
            render()
        }
    }
})

export const TeamForm=()=>{
    render()
}

const render=()=>{
    contentTarget.innerHTML=`
    <div class="teamForm">
    <h2 class="teamFormTitle">New Team</h2>
    <input type="text" class="teamForm__name" placeholder="Enter team name"/>
    <button class="teamForm__createTeam" id="createTeam"> Create Team</button>
    </div>
    `
}