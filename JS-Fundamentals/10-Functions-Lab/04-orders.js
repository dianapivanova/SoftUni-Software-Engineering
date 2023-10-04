function orders(product, quantity) {

    let price = 0

    switch (product) {
        case 'coffee': price = 1.50 * quantity; break;
        case 'water': price = 1.00 * quantity; break;
        case 'coke': price = 1.40 * quantity; break;
        case 'snacks': price = 2.00 * quantity; break;
    }

    console.log(price.toFixed(2))

}
orders('coffee', 2)