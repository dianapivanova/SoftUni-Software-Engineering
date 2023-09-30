function rightPlace(word, symbol, match) {
    // create new string from word and symbol
    let result = ''

    for (let i = 0; i < word.length; i++) {
        if (word[i] == '_') {
            result += symbol
        } else {
            result += word[i]
        }

    }

    // check if result and match are the same
    if (result == match) {
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
    // print result

}
rightPlace()