function computerStore(arr) {

    let taxes = 0
    let totalPriceNoTaxes = 0

    for (let i = 0; i < arr.length - 1; i++) {
        price = Number(arr[i])

        if (price < 0) {
            console.log('Invalid price!'); continue;
        }
        taxes += price * 0.2
        totalPriceNoTaxes += price
    }
    let totalPrice = taxes + totalPriceNoTaxes

    if (arr[arr.length - 1] == "special") {
        totalPrice *= 0.9
    }


    if (totalPrice == 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${totalPriceNoTaxes.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log('-----------')
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }

}

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
