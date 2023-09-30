function restaurant(input) {

    let chickenMenus = Number(input[0])
    let fishMenus = Number(input[1])
    let vegMenus = Number(input[2])

    let chickenMenusPrice = 10.35
    let fishMenusPrice = 12.40
    let vegMenusPrice = 8.15

    let total = chickenMenus * chickenMenusPrice + fishMenus * fishMenusPrice + vegMenus * vegMenusPrice
    let dessert = total * 0.2
    let deliveryPrice = total + dessert + 2.50


    console.log(deliveryPrice)
}
restaurant(["2 ", "4 ", "3 "])