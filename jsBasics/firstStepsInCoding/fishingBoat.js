function fishingBoat(input) {
    let budget = Number(input[0])
    let season = input[1]
    let people = Number(input[2])
    let rent = 0

    if (season === "Spring") {
        rent = 3000.00
    } else if (season === "Summer" || season === "Autumn") {
        rent = 4200.00
    } else {
        rent = 2600.00
    }

    if (people <= 6) {
        rent = rent * 0.90
    } else if (people >= 7 && people <= 11) {
        rent = rent * 0.85
    } else {
        rent = rent * 0.75
    }

    if (people % 2 == 0 && season !== "Autumn") {
        rent = rent * 0.95
    }

    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
    } else if (rent > budget) {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["3000",
    "Summer",
    "11"])
