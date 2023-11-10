function storage(array) {
    let storage = new Map()

    for (let entries of array) {
        let [product, qty] = entries.split(' ')
        qty = Number(qty)

        if (!storage.has(product)) {
            storage.set(product, qty)
        } else {
            let oldQty = storage.get(product)
            let newQty = oldQty + qty
            storage.set(product, newQty)
        }
    }

    for (let entries of storage) {
        console.log(`${entries[0]} -> ${entries[1]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])