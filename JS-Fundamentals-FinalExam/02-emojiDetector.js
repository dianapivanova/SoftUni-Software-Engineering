function emojiDetector(arr) {
    let str = arr[0]
    let coolThreshold = 1
    let coolPattern = /[0-9]/g
    let match = coolPattern.exec(str)

    while (match !== null) {
        if (match) {
            coolThreshold *= Number(match)
        }
        match = coolPattern.exec(str)
    }

    let emojiPattern = /((::)|(\*\*))[A-Z][a-z]{2,}\1/gm
    let emojis = []
    let totalEmojis = 0

    let matchEmojis = emojiPattern.exec(str)

    while (matchEmojis !== null) {
        if (matchEmojis) {
            totalEmojis++
            emojis.push(matchEmojis[0])
        }
        matchEmojis = emojiPattern.exec(str)
    }

    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`)

    for (let emoji of emojis) {
        let totalCoolness = 0
        for (let i = 2; i < emoji.length - 2; i++) {
            let code = emoji[i].charCodeAt()
            totalCoolness += code
        }

        if (totalCoolness >= coolThreshold) {
            console.log(emoji)
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])