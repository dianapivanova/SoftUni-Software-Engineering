function storeProvision(stock, orderedProducts) {
    let products = {}

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i]
        let qty = Number(stock[i + 1])

        products[product] = qty // creating a new key in the empty object {products}, qty is its value
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let orderedProduct = orderedProducts[j]
        let orderedQty = Number(orderedProducts[j + 1])

        if (orderedProduct in products) {
            products[orderedProduct] += orderedQty
        } else {
            products[orderedProduct] = orderedQty
        }
    }

    let kvp = Object.entries(products)
    for (let tuple of kvp) {
        let product = tuple[0]
        let qty = tuple[1]

        console.log(`${product} -> ${qty}`)
    }


}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])