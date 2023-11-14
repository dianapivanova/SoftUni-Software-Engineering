function orderedCatalogue(array) {
    let products = {}
    for (let tokens of array) {
        let [product, price] = tokens.split(' : ')
        price = Number(price)

        products[product] = price
    }

    let currentLetter = ""
    for (let [product, price] of Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]))) {


        if (currentLetter !== product.substring(0, 1)) {
            currentLetter = product.substring(0, 1)
            console.log(currentLetter)
        }

        console.log(`  ${product}: ${price}`)
    }

}
orderedCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)