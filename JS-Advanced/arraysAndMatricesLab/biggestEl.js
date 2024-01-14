function biggestEl(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let rowId = 0; rowId < arr.length; rowId++) {
        for (let colId = 0; colId < arr[rowId].length; colId++) {
            if (arr[rowId][colId] > biggestNum) {
                biggestNum = arr[rowId][colId];
            }
        }
    }

    console.log(biggestNum);
}
biggestEl([[20, 50, 10],
[8, 33, 145]])