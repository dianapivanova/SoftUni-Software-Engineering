function stringSubstring(originalWord, text) {

    text = text.split(' ')

    let isFound = false
    for (let word of text) {
        word = word.toLowerCase()

        if (word == originalWord) {
            isFound = true; break;
        }
    }

    if (!isFound) {
        console.log(`${originalWord} not found!`)
    } else {
        console.log(originalWord)
    }
}
stringSubstring('javascript',
    'Javascript is the best programming language'
)