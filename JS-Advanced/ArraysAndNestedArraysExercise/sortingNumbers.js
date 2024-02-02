function sortingNumbers(arr) {
    let res = []
    arr = arr.sort((a, b) => (a - b))
    let rotations = arr.length

    for (let i = 0; i < rotations / 2; i++) {
        if (arr.length >= 2) {
            res.push(arr.shift())
            res.push(arr.pop())
        } else {
            res.push(arr.shift())

        }
    }

    console.log(res)
}
sortingNumbers([22, 9, 63, 3, 2, 19, 11, 21, 18])