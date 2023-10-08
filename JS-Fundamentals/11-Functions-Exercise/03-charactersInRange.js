function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt(0)
    let code2 = char2.charCodeAt(0)

    let firstCode = Math.min(code1, code2)
    let secondCode = Math.max(code1, code2)

    let result = ''

    for (let i = firstCode + 1; i < secondCode; i++) {
        result += String.fromCharCode(i) + " "

    }

    console.log(result)

}
charactersInRange('a', 'd')