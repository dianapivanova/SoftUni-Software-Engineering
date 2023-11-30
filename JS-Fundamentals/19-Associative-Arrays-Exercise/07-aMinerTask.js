function aMinerTask(array) {
    let obj = {}

    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i]
        let qty = Number(array[i + 1])

        if (resource in obj) {
            obj[resource] += qty
        } else {
            obj[resource] = qty
        }
    }

    for (let entries of Object.entries(obj)) {
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