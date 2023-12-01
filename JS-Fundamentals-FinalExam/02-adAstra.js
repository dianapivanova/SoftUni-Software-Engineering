function adAstra([str]) {
    let pattern = /(\||#)(?<item>[A-Za-z ]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm

    let matches = str.matchAll(pattern)
    let totalKcal = 0
    let products = []

    for (let match of matches) {
        let { item, expdate, calories } = match.groups
        calories = Number(calories)
        totalKcal += calories
        let product = { item, expdate, calories }
        products.push(product)
    }

    let days = totalKcal / 2000

    console.log(`You have food to last you for: ${Math.floor(days)} days!`)
    for (let product of products) {
        let entries = Object.entries(product)
        console.log(`Item: ${entries[0][1]}, Best before: ${entries[1][1]}, Nutrition: ${entries[2][1]}`)
    }
}

adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])