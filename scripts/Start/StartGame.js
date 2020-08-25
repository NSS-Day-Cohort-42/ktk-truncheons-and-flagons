const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".gameContainer")


const render = () => {
    contentTarget.innerHTML =

    `<div class="startGameButton"><button id="startGameButton">Start Game</button></div>`
}

export const StartGame = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "startGameButton") {
        const startGameButtonEvent = new CustomEvent ("startGameButtonClicked")

        eventHub.dispatchEvent(startGameButtonEvent)
    }
})