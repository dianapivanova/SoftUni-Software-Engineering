function revealWords(words, sentence) {
    words = words.split(', ')

    for (let word of words) {
        let censored = '*'.repeat(word.length)

        if (sentence.includes(censored)) {
            sentence = sentence.replace(censored, word)
        }
    }

    console.log(sentence)

}
revealWords('great',
    'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')