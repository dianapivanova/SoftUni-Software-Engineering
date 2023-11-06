function cardGame(arr) {
    const powerObj = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, "J": 11, "Q": 12, "K": 13, "A": 14 };
    const typeObj = { "S": 4, "H": 3, "D": 2, "C": 1 };

    let peopleObj = {};

    for (let row of arr) {
        let entries = row.split(': ');
        let person = entries[0];
        let cards = entries[1].split(', ');

        if (!(person in peopleObj)) {
            peopleObj[person] = [];
        }

        for (let card of cards) {
            if (!peopleObj[person].includes(card)) {
                peopleObj[person].push(card);
            }
        }
    }

    let resultObj = {};

    for (let [person, cards] of Object.entries(peopleObj)) {
        let totalPerPerson = 0;
        for (let card of cards) {
            if (card.length > 2) {
                let cardPower = 10;
                let cardType = typeObj[card.slice(-1)];
                totalPerPerson += cardPower * cardType;
            } else {
                let cardPower = Number(powerObj[card.slice(0, -1)]);
                let cardType = Number(typeObj[card.slice(-1)]);
                totalPerPerson += cardPower * cardType;
            }
        }
        resultObj[person] = totalPerPerson;
    }

    for (let [person, total] of Object.entries(resultObj)) {
        console.log(`${person}: ${total}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])