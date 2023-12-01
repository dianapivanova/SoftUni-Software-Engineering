function barIncome(array) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$.%]*<(?<product>\w+)>[^|$.%]*\|(?<quantity>\d+)\|[^|$.%0-9]*(?<price>\d+\.?\d*)\$/


    let command = array.shift()
    let customers = []
    let totalPrice = 0


    while (command !== 'end of shift') {
        let barInfo = {}
        let match = command.match(pattern)
        let customerTotal = 0
        if (match) {
            let { name, product, quantity, price } = match.groups
            quantity = Number(quantity)
            price = Number(price)
            customerTotal = quantity * price

            barInfo = { name, product, customerTotal }
            customers.push(barInfo)
        }

        totalPrice += customerTotal
        command = array.shift()
    }


    for (let customer of customers) {
        let tokens = Object.entries(customer)
        console.log(`${tokens[0][1]}: ${tokens[1][1]} - ${(tokens[2][1]).toFixed(2)}`)
    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`)
}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])