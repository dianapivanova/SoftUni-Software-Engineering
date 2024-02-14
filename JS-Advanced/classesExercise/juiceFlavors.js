function juiceFlavors(array) {

    let mapResult = new Map()
    let fruitObj = {}
    for (let entries of array) {
        let [fruit, qty] = entries.split(' => ')
        qty = Number(qty)

        if (!fruitObj.hasOwnProperty(fruit)) {
            fruitObj[fruit] = qty
        } else {
            fruitObj[fruit] += qty
        }

        if (fruitObj[fruit] >= 1000) {
            let juiceBottles = Math.floor(Math.abs(fruitObj[fruit] / 1000))
            fruitObj[fruit] -= Math.floor(Math.abs(fruitObj[fruit] / 1000)) * 1000

            if (!mapResult.has(fruit)) {
                mapResult.set(fruit, juiceBottles)
            } else {
                mapResult.set(fruit, mapResult.get(fruit) + juiceBottles)
            }
        }
    }

    for (let bottles of mapResult) {
        console.log(bottles.join(' => '))
    }
}
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])