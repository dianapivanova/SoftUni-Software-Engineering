function storeProvision(stock, orderedProducts) {
    let products = {}

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i]
        let qty = Number(stock[i + 1])

        if (product in products) {
            products[product] += qty
        } else {
            products[product] = qty
        }
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

    for (let tokens of Object.entries(products)) {
        console.log(tokens.join(' -> '))
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])