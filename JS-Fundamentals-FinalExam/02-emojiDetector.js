function emojiDetector([str]) {
    let thresholdPattern = /\d/g
    let numMatch = str.match(thresholdPattern)
    let coolThreshold = 1

    for (let match of numMatch) {
        match = Number(match)
        coolThreshold *= match
    }

    let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/gm

    let matches = str.match(emojiPattern)

    let coolEmojis = []

    for (let match of matches) {
        let totalCoolness = 0
        for (let i = 2; i < match.length - 2; i++) {
            let code = match[i].charCodeAt()
            totalCoolness += code
        }
        if (totalCoolness >= coolThreshold) {
            coolEmojis.push(match)
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${matches.length} emojis found in the text. The cool ones are:`)
    console.log(coolEmojis.join('\n'))

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

