function storeCatalogue(products) {

    let catalogue = {}
    for (let productInfo of products) {
        let [product, price] = productInfo.split(' : ');
        price = Number(price)
        catalogue[product] = price
    }

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => (a[0].localeCompare(b[0])))

    let currentLetter = '';

    for (let [product, price] of sortedCatalogue) {
        if (currentLetter !== product[0]) {
            currentLetter = product[0]
            console.log(currentLetter)
        }
        console.log(`${product}: ${price}`)
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