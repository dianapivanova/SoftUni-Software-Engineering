function revealWords(words, sentence) {
    let wordsArr = words.split(', ')

    for (let word of wordsArr) {
        let censoredWord = '*'.repeat(word.length)
        if (sentence.includes(censoredWord)) {
            sentence = sentence.replace(censoredWord, word)
        }
    }

    console.log(sentence)
}
revealWords('great',
    'softuni is ***** place for learning new programming languages')