import { saveTeam } from "./TeamProvider"

const eventHub=document.querySelector(".teamFormContainer")
const contentTarget=document.querySelector(".")

eventHub.addEventListener("click",clickEvent=>{
    if (clickEvent.target.id==="creatTeam"){
        const teamName=document.querySelector("#forum--input")
        const newTeam={
            "name":teamName.nodeValue,
            "dateCreated":Date.now()
        }
        saveTeam(newTeam)
    }
})

export const teamForm=()=>{
    render()
}

const render=()=>{
    contentTarget.innerHTML=`
    <form>
    <h2 class=teamFormTitle>New Team</h2>
    <input type="text" id="form--input" placeholder="Enter team name here..."/>
    <button id="creatTeam"> Create Team</button>
    </form>
    `
}