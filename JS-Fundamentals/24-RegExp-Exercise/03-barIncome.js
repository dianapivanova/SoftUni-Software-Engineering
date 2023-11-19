function barIncome(array) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$.%]*<(?<product>\w+)>[^|$.%]*\|(?<qty>\d+)\|[^|$.%0-9]*(?<price>\d+\.?\d*)\$/
    let command = array.shift()

    let totalIncome = 0

    while (command !== "end of shift") {

        let match = command.match(pattern)

        if (match) {
            let { name, product, qty, price } = match.groups
            qty = Number(qty)
            price = Number(price)
            let currentPrice = qty * price
            totalIncome += currentPrice

            console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`)
        }

        command = array.shift()
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])