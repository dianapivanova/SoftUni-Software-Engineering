function extractFromArray(array) {
    let res = [array.shift()]
    let smallestNum = res[0]

    for (let el of array) {
        if (el >= smallestNum) {
            res.push(el)
            smallestNum = el;
        }
    }

    return res;
}
extractFromArray([0,
    3,
    2,
    15,
    6,
    1]
)