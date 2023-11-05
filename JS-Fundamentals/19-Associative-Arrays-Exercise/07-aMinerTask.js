function aMinerTask(array) {

    let resultObj = {}

    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i]
        let qty = Number(array[i + 1])

        if (resource in resultObj) {
            resultObj[resource] += qty
        } else {
            resultObj[resource] = qty
        }
    }

    for (let entries of Object.entries(resultObj)) {
        console.log(`${entries[0]} -> ${entries[1]}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)