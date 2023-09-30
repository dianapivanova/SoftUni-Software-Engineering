function godzillaKong(input) {
    let budget = Number(input[0])
    let people = Number(input[1])
    let clothesPricePerPerson = Number(input[2])

    let decor = budget / 10
    let clothesPriceTotal = people * clothesPricePerPerson
    if (people > 150) {
        clothesPriceTotal *= 0.9
    }

    totalExpenses = decor + clothesPriceTotal

    if (budget >= totalExpenses) {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`)
    }


}
godzillaKong()