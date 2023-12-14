function mirrorWords([str]) {

    let pattern = /(#|@)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/gm

    let matches = Array.from(str.matchAll(pattern))
    let mirrorWords = []

    if (matches.length > 0) {
        for (let words of matches) {
            let { wordOne, wordTwo } = words.groups

            if (wordOne == wordTwo.split('').reverse().join('')) {
                mirrorWords.push(`${wordOne} <=> ${wordTwo}`)
            }
        }
        console.log(`${matches.length} word pairs found!`)
        console.log('The mirror words are:')
        console.log(mirrorWords.join(', '))
    } else {
        console.log('No word pairs found!')
        console.log('No mirror words!')
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])