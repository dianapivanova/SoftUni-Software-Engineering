function mirrorWords([str]) {


    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g

    let match = pattern.exec(str)
    let count = 0
    let matches = []

    while (match !== null) {
        if (match) {
            count++
            let firstword = match[2]
            let secondWord = match[3]
            if (firstword == secondWord.split('').reverse().join('')) {
                matches.push(`${firstword} <=> ${secondWord}`)
            }
        }

        match = pattern.exec(str)
    }

    if (count == 0) {
        console.log(`No word pairs found!`)
    } else {
        console.log(`${count} word pairs found!`)
    }

    if (matches.length == 0) {
        console.log(`No mirror words!`)
    } else {
        console.log(`The mirror words are:`)
        console.log(matches.join(', '))
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])