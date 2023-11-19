function furniture(array) {
    let items = []
    let totalPrice = 0
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/

    let command = array.shift()

    while (command !== 'Purchase') {
        let match = command.match(pattern)

        if (match) {
            let { name, price, quantity } = match.groups

            let furniturePrice = price * quantity

            items.push(name)
            totalPrice += furniturePrice
        }

        command = array.shift()
    }

    console.log('Bought furniture:')

    if (items.length > 0) {
        items.forEach(x => console.log(x))
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])

// furniture(['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase'])