function sortingNumbers(arr) {
    let result = []
    arr = arr.sort((a, b) => (a - b))

    let rotations = arr.length / 2

    for (let i = 0; i < rotations; i++) {
        result.push(arr.shift())
        result.push(arr.pop())
    }

    console.log(result)
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])