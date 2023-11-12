function aMinerTask(array) {
    let objResoures = {}
    for (let i = 0; i < array.length; i += 2) {
        let resoure = array[i]
        let qty = Number(array[i + 1])

        if (!objResoures.hasOwnProperty(resoure)) {
            objResoures[resoure] = qty
        } else {
            objResoures[resoure] += qty
        }
    }

    let resultArr = Object.entries(objResoures)

    for (let entry of resultArr) {
        console.log(entry.join(' -> '));
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