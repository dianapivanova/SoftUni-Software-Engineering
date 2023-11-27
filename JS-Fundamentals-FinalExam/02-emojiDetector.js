function emojiDetector([str]) {
    let pattern = /((\*\*)|(::))[A-Z][a-z]{2,}\1/gm
    let numPattern = /[0-9]/g
    let emojis = []
    let matchNums = str.matchAll(numPattern)
    let coolness = 1
    let emojiCount = 0

    for (let match of matchNums) {
        let num = Number(match[0])
        coolness *= num
    }

    let matchEmoji = str.matchAll(pattern)

    for (let match of matchEmoji) {
        emojiCount++
        let emoji = match[0]
        emojis.push(emoji)
    }


    console.log(`Cool threshold: ${coolness}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    for (let emoji of emojis) {
        let emojiCoolness = 0;
        for (let i = 2; i < emoji.length - 2; i++) {
            let code = emoji[i].charCodeAt();
            emojiCoolness += code;
        }

        if (emojiCoolness >= coolness) {
            console.log(emoji);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

