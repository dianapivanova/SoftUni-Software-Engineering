function lowerCityPrices(array) {

    let register = []
    for (let townInfo of array) {
        let [curTown, curproduct, curPrice] = townInfo.split(' | ');
        curPrice = Number(curPrice);

        let findProduct = register.find(x => x.product == curproduct)

        if (!findProduct) {
            register.push({ 'town': curTown, 'product': curproduct, 'price': curPrice }); continue;
        }

        if (findProduct.price > curPrice) {
            findProduct.price = curPrice;
            findProduct.town = curTown
        }
    }

    register.forEach(x => {
        console.log(`${x.product} -> ${x.price} (${x.town})`)
    })
}
lowerCityPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])