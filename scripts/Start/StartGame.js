const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".view1")


const render = () => {
    contentTarget.innerHTML =
    `<button class="" id="startGameButton">Start Game</button>`
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