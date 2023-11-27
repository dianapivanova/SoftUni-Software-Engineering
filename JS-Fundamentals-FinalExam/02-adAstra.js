function adAstra(array) {
    let pattern = /([#|])(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,5})\1/g
    let totalKcal = 0

    let str = array.shift()
    let matches = str.matchAll(pattern)
    let allProducts = []

    if (matches) {
        for (let match of matches) {
            let { product, date, kcal } = match.groups
            kcal = Number(kcal)
            totalKcal += kcal
            let obj = { product, date, kcal }
            allProducts.push(obj)
        }
    }



    console.log(`You have food to last you for: ${Math.floor(totalKcal / 2000)} days!`)
    for (let obj of allProducts) {
        console.log(`Item: ${obj.product}, Best before: ${obj.date}, Nutrition: ${obj.kcal}`)
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])