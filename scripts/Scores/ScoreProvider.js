let scores = []

const eventHub = document.querySelector(".container")

export const useScores = () => scores.slice()

export const getScores = () => {
  return fetch("http://localhost:8088/scores")
    .then(res => res.json())
    .then(scoreData => {
      scores = scoreData
    })
} 

export const saveScores = scores => {
  const [ score1, score2, score3 ] = scores
  return saveScore(score1)
    .then(() => saveScore(score2))
    .then(() => saveScore(score3))
    .then(getScores)
    .then(dispatchStateChangeEvent)
}

const saveScore = score => {
  return fetch("http://localhost:8088/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(score)
  })
}

const dispatchStateChangeEvent = () => {
  const scoresStateChanged = new CustomEvent("scoreStateChanged")
  eventHub.dispatchEvent(scoresStateChanged)
}