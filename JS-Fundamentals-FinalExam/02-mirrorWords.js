function mirrorWords([str]) {


    let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/gm

    let validPairs = 0
    let mirrorWords = []

    let match = str.matchAll(pattern)

    for (let word of match) {

        validPairs++
        let { wordOne, wordTwo } = word.groups

        if (wordOne == wordTwo.split('').reverse().join('')) {
            mirrorWords.push(`${wordOne} <=> ${wordTwo}`)
        }

    }


    if (validPairs == 0) {
        console.log(`No word pairs found!`)
        console.log(`No mirror words!`)
    } else {
        console.log(`${validPairs} word pairs found!`)
        if (mirrorWords.length > 0) {
            console.log(`The mirror words are:`)
            console.log(mirrorWords.join(', '))
        } else {
            console.log(`No mirror words!`)
        }
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])