function counterStrike(array) {
    let initialHealth = Number(array.shift())
    let wins = 0
    let isDead = false

    let index = 0
    let command = array[index]

    while (command !== "End of battle") {
        let distance = Number(array[index])

        if (initialHealth >= distance) {
            initialHealth -= distance
            wins++
        } else if (initialHealth < distance) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialHealth} energy`);
            initialHealth = 0
            isDead = true; break;
        }

        if (wins % 3 == 0) {
            initialHealth += wins
        }

        index++
        command = array[index]
    }

    if (!isDead) {
        console.log(`Won battles: ${wins}. Energy left: ${initialHealth}`)
    }

}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])




