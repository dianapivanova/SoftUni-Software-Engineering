function biggestEl(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] > biggestNum) {
                biggestNum = arr[row][col]
            }
        }
    }

    console.log(biggestNum)
}
biggestEl([[20, 50, 10],
[8, 33, 145]])