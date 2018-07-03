const alphabeticShift = (inputString) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const letters = inputString.split('')
                    .map(letter => alphabet.indexOf(letter) !== 25 ? alphabet.indexOf(letter) + 1 : 0)
                    .map(index => alphabet[index])
                    .join('')

    return letters

}

console.log(alphabeticShift('crazy'))

