function diagonalSums(arr) {
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {

            if (row == col) {
                diagonal1Sum += arr[row][col]
            }

            if (col == arr[row].length - row - 1) {
                diagonal2Sum += arr[row][col]
            }
        }
    }

    console.log(diagonal1Sum, diagonal2Sum)
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)