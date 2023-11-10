function pascalCaseSplitter(input) {
    let wordsArr = []
    let currentWord = ""

    for (let i = 0; i < input.length; i++) {
        let char = input[i]

        if (char === char.toUpperCase()) {
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