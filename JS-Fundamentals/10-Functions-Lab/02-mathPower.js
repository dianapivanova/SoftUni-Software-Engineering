function mathPower(num, pow) {
    let product = 1

    for (let i = 0; i < pow; i++) {
        product *= num
    }

    console.log(product)
}
mathPower(2, 8)