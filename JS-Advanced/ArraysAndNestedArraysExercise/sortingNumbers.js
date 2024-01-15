function sortingNumbers(arr) {
    let result = []
    arr = arr.sort((a, b) => (a - b))

    let rotations = arr.length / 2

    for (let i = 0; i < rotations; i++) {
        result.push(arr.shift())
        result.push(arr.pop())
    }

    return result;
}
sortingNumbers([1])