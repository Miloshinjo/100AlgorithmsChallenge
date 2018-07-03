const addTwoDigits = (num) => {

  const formattedNum = num
  .toString()
  .split('')
  .map(n => parseInt(n))
  .reduce((a,b) => a + b)

  return formattedNum
}

console.log(addTwoDigits(29))
console.log(addTwoDigits(88))