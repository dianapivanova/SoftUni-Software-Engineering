function equalNeighbors(matrix) {
    let equalPairs = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row !== matrix.length - 1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    equalPairs++;
                }
                if (matrix[row][col] == matrix[row][col + 1]) {
                    equalPairs++;
                }
            } else {
                if (matrix[row][col] == matrix[row][col + 1]
                ) {
                    equalPairs++;
                }
            }
        }
    }

    return equalPairs
}
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['done', 'done', 'yo', '6'],
    ['not', 'done', 'yet', 'yo']]

)