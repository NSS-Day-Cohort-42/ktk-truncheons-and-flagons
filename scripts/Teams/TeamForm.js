import { saveTeam } from "./TeamProvider.js"

const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".teamFormContainer")

eventHub.addEventListener("click",clickEvent=>{
    if (clickEvent.target.id==="createTeam"){
        const teamName=document.querySelector(".teamForm__name")
        const newTeam={
            "name":teamName.value,
            "dateCreated":Date.now()
        }
        saveTeam(newTeam)
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