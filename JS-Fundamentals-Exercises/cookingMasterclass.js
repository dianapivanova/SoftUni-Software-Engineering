function cookingMasterclass(array) {

    let budget = Number(array.shift())
    let students = Number(array.shift())
    let flourPrice = Number(array.shift())
    let eggPrice = Number(array.shift())
    let apronPrice = Number(array.shift())

    let totalApronPrice = apronPrice * Math.ceil(students * 1.2)
    let totalEggsPrice = eggPrice * students * 10
    let totalFlourPrice = 0

    for (let i = 1; i <= students; i++) {
        if (i % 5 == 0) {
            continue;
        } else {
            totalFlourPrice += flourPrice
        }

    }

    totalPrice = totalEggsPrice + totalFlourPrice + totalApronPrice

    if (totalPrice > budget) {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`)
    } else {
        console.log(`Items purchased for ${(totalPrice).toFixed(2)}$.`)
    }

}
cookingMasterclass([50,

    2,

    1.0,

    0.10,

    10.0])