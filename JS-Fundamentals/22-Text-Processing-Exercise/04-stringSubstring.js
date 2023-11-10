function stringSubstring(originalWord, text) {
    let lookedWord = originalWord.toLowerCase()
    textArr = text.toLowerCase().split(' ')
    let isFound = false
    for (let word of textArr) {
        if (lookedWord == word) {
            console.log(originalWord); isFound = true; break;
        }
    }

    if (!isFound) {
        console.log(`${originalWord} not found!`)
    }
}
stringSubstring('Javascript',
    'Javascript is the best javascripting language'
)