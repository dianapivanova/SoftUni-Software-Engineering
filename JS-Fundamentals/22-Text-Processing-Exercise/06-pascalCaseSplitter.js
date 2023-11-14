function pascalCaseSplitter(input) {
    let wordsArr = []
    let currentWord = ""

    for (let char of input) {
        if (char == char.toUpperCase()) {
            if (currentWord) {
                wordsArr.push(currentWord)
                currentWord = ''
            }
        }
        currentWord += char
    }

    if (currentWord) {
        wordsArr.push(currentWord)
    }
    console.log(wordsArr.join(', '))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')