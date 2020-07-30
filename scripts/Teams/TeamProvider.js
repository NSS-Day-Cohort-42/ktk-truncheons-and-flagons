let teams = []

export const useTeams = () => teams.slice()

export const getTeams = () => {
  return fetch('http://localhost:8088/teams')
    .then(res => res.json())
    .then(teamData => {
      teams = teamData
    })
}