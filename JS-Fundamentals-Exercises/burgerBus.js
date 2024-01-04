function burgerBus(array) {
    let cities = Number(array.shift())
    let totalProfit = 0
    let visitedCities = 0

    for (let i = 0; i < array.length; i += 3) {
        visitedCities++
        let cityProfit = 0
        let cityName = array[i]
        let income = Number(array[i + 1])
        let expenses = Number(array[i + 2])

        if (visitedCities % 3 == 0 && visitedCities % 5 !== 0) {
            expenses *= 1.5
        }

        if (visitedCities % 5 == 0) {
            income *= 0.9
        }

        cityProfit += income - expenses



        console.log(`In ${cityName} Burger Bus earned ${cityProfit.toFixed(2)} leva.`)

        totalProfit += cityProfit
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}
burgerBus(["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"])