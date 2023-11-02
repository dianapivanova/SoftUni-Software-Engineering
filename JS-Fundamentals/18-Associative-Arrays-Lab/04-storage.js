function storage(array) {
    let products = new Map()

    for (let tokens of array) {
        [product, qty] = tokens.split(' ')
        qty = Number(qty)

        if (products[product]) {
            products[product] += qty
        } else {
            products[product] = qty
        }
    }

    for (let [product, qty] of Object.entries(products)) {
        console.log(`${product} -> ${qty}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])