function furniture(array) {
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/
    let furnitures = []
    let totalSum = 0

    for (let el of array) {

        let match = el.match(pattern)

        if (match) {
            let { furniture, price, qty } = match.groups
            price = Number(price)
            qty = Number(qty)

            furnitures.push(furniture)
            totalSum += qty * price
        }


    }

    console.log(`Bought furniture:`)
    if (furnitures.length > 0) {
        console.log(`${furnitures.join('\n')}`)
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)

}
// furniture(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase'])

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])