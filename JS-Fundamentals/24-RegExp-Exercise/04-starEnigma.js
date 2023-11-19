function starEnigma(array) {
    let messageNum = Number(array.shift())
    let pattern = /[star]/gi
    let decryptedMessages = []

    for (let i = 0; i < messageNum; i++) {
        let message = array[i]
        let decryptedMessage = ''

        let matches = message.match(pattern)

        if (matches) {
            let count = matches.length

            for (let char of message) {
                let code = char.charCodeAt()
                code -= count
                let newCode = String.fromCharCode(code)
                decryptedMessage += newCode
            }
        } else {
            decryptedMessage = message
        }

        decryptedMessages.push(decryptedMessage)

    }

    let planetPattern = /@(?<planet>[A-Za-z]+)[^-@!:>]*\:(?<population>\d+)[^-@!:>]*\!(?<attack>[A|D])\![^-@!:>]*\->(?<soldiers>\d+)/

    let attackedPlanets = []
    let destroyedPlanets = []

    for (let i = 0; i < decryptedMessages.length; i++) {
        let currentPlanet = decryptedMessages[i]
        let match = currentPlanet.match(planetPattern)

        if (match) {
            let { planet, population, attack, soldiers } = match.groups
            if (attack == "D") {
                destroyedPlanets.push(planet)
            } else {
                attackedPlanets.push(planet)
            }
        }
    }

    destroyedPlanets.sort((a, b) => a.localeCompare(b))
    attackedPlanets.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`)
        }
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`)
        }
    }
}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)