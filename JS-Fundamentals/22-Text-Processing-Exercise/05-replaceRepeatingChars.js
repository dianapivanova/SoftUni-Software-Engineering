function replaceChars(text) {
    text = text.split('')
    let result = ''

    let currentLetter = text[0]
    result += (currentLetter)
    for (let el of text) {
        if (!(el == currentLetter)) {
            currentLetter = el
            result += el
        }
    }

    console.log(result)
}
replaceChars('aaaaabbbbbcdddeeeedssaa')