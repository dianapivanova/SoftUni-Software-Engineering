function sorting(arr) {

    arr.sort((a, b) => (a - b))
    let newArr = []

    while (arr.length > 0) {
        let biggestEl = arr.pop()
        let smallestEl = arr.shift()

        newArr.push(biggestEl, smallestEl)

    }

    console.log(newArr.join(' '))

}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])