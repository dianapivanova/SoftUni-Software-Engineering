function furniture(array) {
    let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+\.?\d*)\!(?<quantity>\d+)/
    let totalMoney = 0
    let furniture = []

    for (let row of array) {
        let match = row.match(pattern)

        if (match) {
            let { product, price, quantity } = match.groups
            price = Number(price)
            quantity = Number(quantity)
            let totalPrice = price * quantity
            totalMoney += totalPrice

            furniture.push(product)

        }
    }

    console.log('Bought furniture:')
    console.log(furniture.join('\n'))
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`)

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])

// furniture(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase'])