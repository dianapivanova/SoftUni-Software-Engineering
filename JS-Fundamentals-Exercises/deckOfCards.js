function deckOfCards(array) {

    let cardList = array.shift().split(', ')
    let commands = Number(array.shift())

    for (let command of array) {
        let tokens = command.split(', ')
        let action = tokens[0]

        if (action == 'Add') {
            let card = tokens[1]

            if (!cardList.includes(card)) {
                cardList.push(card)
                console.log('Card successfully added')
            } else {
                console.log('Card is already in the deck')
            }
        } else if (action == 'Insert') {
            let idx = Number(tokens[1])
            let card = tokens[2]

            if (idx >= 0 && idx < cardList.length) {
                if (!cardList.includes(card)) {
                    cardList.splice(idx, 0, card)
                    console.log('Card successfully added')
                } else {
                    console.log('Card is already added')
                }
            } else {
                console.log(`Index out of range`)
            }

        } else if (action == 'Remove') {
            let card = tokens[1]

            if (cardList.includes(card)) {
                let idx = cardList.indexOf(card)
                cardList.splice(idx, 1)
                console.log('Card successfully removed')
            } else {
                console.log('Card not found')
            }
        } else if (action == 'Remove At') {
            let idx = Number(tokens[1])
            if (idx >= 0 && idx < cardList.length) {
                cardList.splice(idx, 1)
                console.log('Card successfully removed')
            } else {
                console.log(`Index out of range`)
            }
        }
    }

    console.log(cardList.join(', '))
}
deckOfCards((["Ace of Diamonds, Queen of Hearts, King of Clubs",

    "3",

    "Add, King of Diamonds",

    "Insert, 2, Jack of Spades",

    "Remove, Ace of Diamonds"]))