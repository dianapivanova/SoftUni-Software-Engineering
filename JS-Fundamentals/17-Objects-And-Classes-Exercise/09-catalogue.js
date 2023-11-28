function orderedCatalogue(array) {
    let object = {}
    for (let item of array) {
        let [product, price] = item.split(' : ')
        object[product] = price
    }

    let sortedArr = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]))

    let letter = ""
    for (let entries of sortedArr) {

        if (entries[0][0] !== letter) {
            letter = entries[0][0]
            console.log(letter)
        }
        console.log(`${entries[0]}: ${entries[1]}`)

    }

}
orderedCatalogue([
    'Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)