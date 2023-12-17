function lily(array) {
    let age = Number(array.shift())
    let washerPrice = Number(array.shift())
    let toyPrice = Number(array.shift())

    let totalMoneySaved = 0
    let toyNum = 0
    let money = 10

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            totalMoneySaved += money - 1
            money += 10
        } else {
            toyNum++
        }
    }

    let moneyFromToys = toyPrice * toyNum
    totalMoneySaved += moneyFromToys

    if (washerPrice <= totalMoneySaved) {
        console.log(`Yes! ${(totalMoneySaved - washerPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washerPrice - totalMoneySaved).toFixed(2)}`)
    }

}
lily(["21",
    "1570.98",
    "3"])