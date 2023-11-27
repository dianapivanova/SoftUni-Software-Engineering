function mirrorWords([str]) {

    let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
    let matches = str.matchAll(pattern)
    let mirror = []
    let count = 0

    for (let match of matches) {
        count++
        let firstWord = match.groups.wordOne
        let secondWord = match.groups.wordTwo

        if (firstWord == secondWord.split('').reverse().join('')) {
            mirror.push(`${firstWord} <=> ${secondWord}`)
        }
    }

    if (count > 0) {
        console.log(`${count} word pairs found!`)

        if (mirror.length > 0) {
            console.log(`The mirror words are:`)
            console.log(mirror.join(', '))
        } else {
            console.log(`No mirror words!`)
        }
    } else {
        console.log(`No word pairs found!`)
        console.log(`No mirror words!`)
    }

}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])