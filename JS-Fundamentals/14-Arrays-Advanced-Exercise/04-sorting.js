function sorting(arr) {

    arr.sort((a, b) => (a - b))
    let newArr = []
    let startIndex = 0
    let endIndex = arr.length - 1

    while (newArr.length !== arr.length) {
        newArr.push(arr[endIndex])
        if (newArr.length !== arr.length) {
            newArr.push(arr[startIndex])
        }
        startIndex++
        endIndex--
    }

    console.log(newArr.join(" "))
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])