let scores = []

export const useScores = () => scores.slice()

export const getScores = () => {
  return fetch('http://localhost:8088/scores')
    .then(res => res.json())
    .then(scoreData => {
      scores = scoreData
    })
} 