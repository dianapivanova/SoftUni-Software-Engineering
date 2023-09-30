function toyShop(input) {

    let trip = Number(input[0])
    let puzzle = Number(input[1])
    let doll = Number(input[2])
    let bear = Number(input[3])
    let minion = Number(input[4])
    let truck = Number(input[5])

    let puzzleTotal = puzzle * 2.60
    let dollTotal = doll * 3
    let bearTotal = bear * 4.10
    let minionTotal = minion * 8.20
    let truckTotal = truck * 2

    let toysPriceTotal = puzzleTotal + dollTotal + bearTotal + minionTotal + truckTotal
    let toysSum = puzzle + doll + bear + minion + truck

    if (toysSum > 50) {
        toysPriceTotal *= 0.75
    }

    toysPriceTotal *= 0.90


    if (toysPriceTotal >= trip) {
        console.log(`Yes! ${(toysPriceTotal - trip).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(trip - toysPriceTotal).toFixed(2)} lv needed.`)
    }

}
toyShop(["40.8", "20", "25", "30", "50", "10"])