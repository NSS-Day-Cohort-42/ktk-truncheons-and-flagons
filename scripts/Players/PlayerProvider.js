let player=[]

export const getPlayers=()=>{
    return fetch("http://localhost:8080/players")
    .then(resp=>resp.json())
    .then(parseplayes=>{
        players=parseplayes
    })
}

export const usePlayers=()=>{
    return players.slice()
}