function theHuntingGames(array) {
    let days = Number(array.shift())
    let players = Number(array.shift())
    let groupEnergy = Number(array.shift())
    let water = Number(array.shift()) * players
    let food = Number(array.shift()) * players


    for (let i = 0; i < array.length; i++) {
        let dailyEnergy = Number(array[i])


        if (i % 2 == 0) {
            water -= water * 0.3
            groupEnergy *= 1.05
        }

        if (i % 3 == 0) {
            groupEnergy *= 1.10
            food /= players
        }

        groupEnergy -= dailyEnergy

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
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"])
