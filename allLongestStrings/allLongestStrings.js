const allLongestStrings = (inputArray) => {
    const lengths = inputArray.map(word => word.length)
    const longestWordLngt = Math.max(...lengths)

    const longestWords = inputArray.filter((word) => word.length === longestWordLngt)

    return longestWords
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))