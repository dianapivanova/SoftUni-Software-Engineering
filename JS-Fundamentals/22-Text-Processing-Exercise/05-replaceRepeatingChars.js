function replaceChars(text) {
    let textArr = text.split('')
    let resultArr = [textArr[0]]

    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i - 1]) {
            continue;
        } else {
            resultArr.push(text[i])
        }
    }

    console.log(resultArr.join(''))

}
replaceChars('aaaaabbbbbcdddeeeedssaa')