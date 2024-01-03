function adAstra([str]) {
    let pattern = /(\||#)(?<product>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g
    let totalKcal = 0

    let matches = str.matchAll(pattern)
    let allProducts = []

    for (let match of matches) {
        let { product, expdate, kcal } = match.groups
        let productInfo = { product, expdate, kcal }
        totalKcal += Number(kcal)
        allProducts.push(productInfo)
    }

    let days = Math.floor(totalKcal / 2000)

    console.log(`You have food to last you for: ${days} days!`)
    for (let product of allProducts) {
        let [item, expDate, kcal] = Object.entries(product)
        console.log(`Item: ${item[1]}, Best before: ${expDate[1]}, Nutrition: ${kcal[1]}`)
    }

}

adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])