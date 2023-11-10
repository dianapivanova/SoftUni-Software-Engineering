function revealWords(words, sentence) {
    let wordsArr = words.split(', ')

    while (sentence.includes('*')) {
        let currentWordForReplace = wordsArr[0]
        let lookedCensor = "*".repeat(currentWordForReplace.length)

        sentence = sentence.replace(lookedCensor, currentWordForReplace)

        if (wordsArr.length > 1) {
            wordsArr.shift()
        }
    }


    console.log(sentence);
}
revealWords('softuni, is, great, place, for, learning, new, programming, languages',
    '******* ** ***** ***** *** ******** *** *********** *********')