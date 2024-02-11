function printDeckOfCards(array) {

    let result = []
    for (let card of array) {
        let face = card.slice(0, card.length - 1)
        let suit = card.slice(card.length - 1)

        try {
            createCard(face, suit)
            result.push(createCard(face, suit))
        } catch (err) {
            console.log(`Invalid card: ${card}`); return;

        }
    }

    function createCard(face, suit) {
        let faces = ['2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A'][0].split(', ')
        let suits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }

        if (!faces.includes(face)) {
            throw new Error('Error');
        }

        const cardCreationObj = {
            face: face,
            suit: suits[suit],
            toString: function () {
                return `${this.face}${this.suit}`
            }
        }

        return cardCreationObj
    }

    console.log(result.join(' '))
}
printDeckOfCards(['1C', '3D', 'QD', '1C'])
