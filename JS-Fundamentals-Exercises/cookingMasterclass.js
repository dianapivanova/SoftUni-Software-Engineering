function cookingMasterclass(array) {

    let budget = Number(array.shift())
    let students = Number(array.shift())
    let flourPrice = Number(array.shift())
    let eggPrice = Number(array.shift())
    let apronPrice = Number(array.shift())

    let totalPrice = 0
    let totalEggsPrice = 0
    let totalFlourPrice = 0
    let totalApronPrice = 0

    for (let i = 1; i <= students; i++) {
        totalEggsPrice += eggPrice * 10
        if (i % 5 == 0) {
            flourPrice = 0
        }
        totalFlourPrice += flourPrice
        totalApronPrice += apronPrice
    }

    totalPrice = totalEggsPrice + totalFlourPrice + totalApronPrice * 1.2

    if (totalPrice > budget) {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`)
    } else {
        console.log(`Items purchased for ${(totalPrice).toFixed(2)}$.`)
    }

}
cookingMasterclass(([100,

    25,

    4.0,

    1.0,

    6.0]))