function storeCatalogue(array) {

    let result = {}

    for (let product of array) {
        let [item, price] = product.split(' : ')
        price = Number(price)
        result[item] = price
    }

    let sortedProducts = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))

    let currentLetter = ''

    for (let product of sortedProducts) {
        let productLetter = product[0][0]
        if (currentLetter !== productLetter) {
            currentLetter = productLetter
            console.log(currentLetter)
        }
        console.log(`  ${product[0]}: ${product[1]}`)
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)