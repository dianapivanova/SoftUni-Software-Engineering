function hashtagReplacement(sentence) {
    let sentenceArr = sentence.split(' ')
    let resultArr = []

    for (let word of sentenceArr) {
        let isValid = false
        if (word.startsWith('#') && word.length > 1) {
            let specialWord = word.substring(1)
            if (/^[A-Za-z]+$/.test(specialWord)) {
                isValid = true
                resultArr.push(specialWord)
            }
        }
    }

    // Print the special words on new lines
    for (let specialWord of resultArr) {
        console.log(specialWord)
    }
}
hashtagReplacement('Nowadays everyone uses # to tag a #special word in #socialMedia')