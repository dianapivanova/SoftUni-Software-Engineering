function lowerCityPrices(array) {

    let towns = []
    for (let row of array) {
        let [town, product, price] = row.split(' | ')
        price = Number(price)

        let findProduct = towns.find(x => x.product == product)

        if (!findProduct) {
            let obj = { product, town, price }
            towns.push(obj)
        } else if (findProduct.price > price) {
            findProduct.town = town
            findProduct.price = price
        }



    }

    for (let obj of towns) {
        let [product, town, price] = Object.entries(obj)
        console.log(`${product[1]} -> ${price[1]} (${town[1]})`)
    }
}
lowerCityPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])