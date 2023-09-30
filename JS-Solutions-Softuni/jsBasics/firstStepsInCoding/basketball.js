function basketball(input) {

    let yearPriceBasket = Number(input[0])
    let shoes = yearPriceBasket * 0.6
    let clothes = shoes * 0.8
    let ball = clothes / 4
    let accessories = ball / 5

    let totalExpenses = yearPriceBasket + shoes + clothes + ball + accessories

    console.log(totalExpenses)
}
basketball(["365"])