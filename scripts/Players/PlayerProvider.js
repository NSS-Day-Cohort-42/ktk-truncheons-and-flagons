let players=[]

export const getPlayers=()=>{
    return fetch("http://localhost:8080/players")
    .then(resp=>resp.json())
    .then(parseplays=>{
        players=parseplays
    })
}

export const usePlayers=()=>{
    return players.slice()
}