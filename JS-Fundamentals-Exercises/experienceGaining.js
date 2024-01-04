function experienceGaining(array) {
    let neededExperience = Number(array.shift())
    let battles = Number(array.shift())
    let totalExperience = 0
    let battleCount = 0

    for (let i = 0; i < battles; i++) {
        let experience = Number(array[i])
        battleCount++

        if (battleCount % 15 == 0) {
            experience *= 1.05
        } else if (battleCount % 5 == 0) {
            experience *= 0.9
        } else if (battleCount % 3 == 0) {
            experience *= 1.15
        }

        totalExperience += experience

        if (totalExperience >= neededExperience) {
            break;
        }
    }

    if (neededExperience > totalExperience) {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - totalExperience).toFixed(2)} more needed.`)
    } else {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`)
    }

}
experienceGaining([500,

    5,

    50,

    100,

    200,

    100,

    20])