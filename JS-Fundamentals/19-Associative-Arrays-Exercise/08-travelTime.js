function travelTime(input) {
    let countryObj = {}

    for (let row of input) {
        let [cnt, town, price] = row.split(' > ')
        price = Number(price)

        if (!(cnt in countryObj)) {
            countryObj[cnt] = {}
        }

        if (!(town in countryObj[cnt])) {
            countryObj[cnt][town] = price
        } else {
            if (countryObj[cnt][town] > price) {
                countryObj[cnt][town] = price
            }
        }
    }

    let sortedArr = Object.entries(countryObj).sort((a, b) => (a[0].localeCompare(b[0])))


    for (let entries of sortedArr) {
        let finalString = ''
        let townArr = Object.entries(entries[1]).sort((a, b) => a[1] - b[1])

        finalString += entries[0] + ' -> '

        for (let [town, price] of townArr) {
            finalString += `${town} -> ${price} `
        }

        console.log(finalString.trim())
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)