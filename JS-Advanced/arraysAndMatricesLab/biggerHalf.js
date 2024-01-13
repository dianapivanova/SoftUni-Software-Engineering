function biggerHalf(arr) {

    let res = arr.sort((a, b) => (a - b)).slice(Math.floor(arr.length / 2))

    return res

}
biggerHalf([3, 19, 14, 7, 2, 19, 6])