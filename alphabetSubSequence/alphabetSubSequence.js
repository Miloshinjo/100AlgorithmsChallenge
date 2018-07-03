const alphabetSubsequence = (s) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const letterPlaces = s.split('').map((letter) => alphabet.indexOf(letter))

  for (i = 0; i < letterPlaces.length; i++) {
    if (letterPlaces[i] >= letterPlaces[i + 1]) {
      return false
    }
  }
  return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
