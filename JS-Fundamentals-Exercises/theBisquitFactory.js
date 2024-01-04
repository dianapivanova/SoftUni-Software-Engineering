function bisquitFactory(array) {
    let dailyProductionPerWorker = Number(array.shift())
    let workers = Number(array.shift())
    let factoryProduction = Number(array.shift())

    let totalProduction = 0

    for (let i = 1; i <= 30; i++) {
        let dailyProduction = 0
        dailyProduction += Math.floor(workers * dailyProductionPerWorker)

        if (i % 3 == 0) {
            dailyProduction *= 0.75
        }

        totalProduction += Math.floor(dailyProduction)
    }

    console.log(`You have produced ${totalProduction} biscuits for the past month.`)

    if (totalProduction > factoryProduction) {
        console.log(`You produce ${(totalProduction / factoryProduction * 100 - 100).toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${Math.abs(totalProduction / factoryProduction * 100 - 100).toFixed(2)} percent less biscuits.`)
    }
}
bisquitFactory((["1",

    "1",

    "1"]))