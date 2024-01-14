function diagonalSums(arr) {
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;

    for (let rowId = 0; rowId < arr.length; rowId++) {
        for (let colId = 0; colId < arr[rowId].length; colId++) {
            if (rowId === colId) {
                diagonal1Sum += arr[rowId][colId];
            }

            // The correct calculation for the second diagonal is arr[rowId][arr[rowId].length - 1 - rowId]
            if (rowId + colId === arr[rowId].length - 1) {
                diagonal2Sum += arr[rowId][colId];
            }
        }
    }

    return (`${diagonal1Sum} ${diagonal2Sum}`)
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)