function smallestNum(arr) {
    let sortedNums = arr.sort((a, b) => (a - b)).slice(0, 2).join(' ')

    console.log(sortedNums)
}
smallestNum([30, 15, 50, 5])