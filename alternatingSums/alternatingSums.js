const alternatingSums = (a) => {
  const team1Weight = a.filter((el, i, array) => {
    return array[i] && i % 2 === 0
  }).reduce((a,b) => a + b)

  const team2Weight = a.filter((el, i, array) => {
    return array[i] && i % 2 !== 0
  }).reduce((a,b) => a + b)

  return [team1Weight, team2Weight]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))