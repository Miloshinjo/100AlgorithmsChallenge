const arrayChange = (inputArray) => {
  let counter = 0
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const diff = (inputArray[i] + 1) - inputArray[i + 1]
      inputArray[i + 1] = inputArray[i] + 1
      counter += diff
    }
  }
  return counter

}

console.log(arrayChange([1, 1, 1]))