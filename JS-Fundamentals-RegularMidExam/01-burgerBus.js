function burgerBus(array) {
    let citiesNum = Number(array.shift())
    let visitedCities = 0
    let currentProfit = 0
    let totalProfit = 0

    for (let i = 0; i < array.length; i += 3) {
        visitedCities++
        let cityName = array[i]
        let earnedMoney = Number(array[i + 1])
        let expenses = Number(array[i + 2])


        if (visitedCities % 5 == 0) {
            earnedMoney *= 0.9
        }

        if (visitedCities % 5 !== 0) {
            if (visitedCities % 3 == 0) {
                expenses *= 1.5
            }
        }

        currentProfit = earnedMoney - expenses
        console.log(`In ${cityName} Burger Bus earned ${currentProfit.toFixed(2)} leva.`)
        totalProfit += currentProfit
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)

}
burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60"
])
