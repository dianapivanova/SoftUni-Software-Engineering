function theHuntingGames(array) {
    let days = Number(array.shift())
    let players = Number(array.shift())
    let groupEnergy = Number(array.shift())
    let water = Number(array.shift()) * players * days
    let food = Number(array.shift()) * players * days


    for (let i = 1; i <= array.length; i++) {
        let dailyEnergy = Number(array[i - 1])

        groupEnergy -= dailyEnergy

        if (i % 2 == 0) {
            groupEnergy *= 1.05
            water -= water * 0.3
        }

        if (i % 3 == 0) {
            groupEnergy *= 1.10
            food -= food / players
        }

        if (groupEnergy <= 0) {
            break;
        }

    }

    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
    }

}
theHuntingGames(["1",

    "1",

    "620.3",

    "0.00",

    "0.00",

    "620.3",

])
