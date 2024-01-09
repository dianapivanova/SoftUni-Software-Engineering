function bakery(array) {
    let command = array.shift()

    let storage = []
    let sold = 0

    while (command != 'Complete ') {
        let [action, qty, product] = command.split(' ')
        qty = Number(qty)

        if (action == 'Receive') {
            let findProduct = storage.find(x => x.product == product)

            if (findProduct) {
                findProduct.qty += qty
            } else if (!findProduct) {
                let obj = { product: product, qty: qty }
                storage.push(obj)
            }
        } else if (action == 'Sell') {
            let findProduct = storage.find(x => x.product == product)
            if (!findProduct) {
                console.log(`You do not have any ${product}.`)
            } else {

                if (findProduct.qty < qty) {
                    sold += findProduct.qty
                    console.log(`There aren't enough ${findProduct.product}. You sold the last ${findProduct.qty} of them.`)
                    let idx = storage.indexOf(findProduct)
                    storage.splice(idx, 1)
                } else {
                    console.log(`You sold ${qty} ${product}.`)
                    sold += qty
                    findProduct.qty -= qty

                    if (findProduct.qty == 0) {
                        let idx = storage.indexOf(findProduct)
                        storage.splice(idx, 1)
                    }
                }
            }
        }

        command = array.shift()
    }

    for (let items of storage) {
        let [product, qty] = Object.entries(items)
        console.log(`${product[1]}: ${qty[1]}`)
    }
    console.log(`All sold: ${sold} goods`)
}
bakery(["Receive 105 cookies ",
    "Receive 10 donuts ",
    "Sell 10 donuts ",
    "Sell 1 bread ",
    "Complete "])
