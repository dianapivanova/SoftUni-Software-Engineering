function orbitscreation([rows, cols, starRow, starCol]) {

    let matrix = []

    for (let row = 0; row < rows; row++) {
        let currentRow = []
        for (let col = 0; col < cols; col++) {
            currentRow.push('X')
        }
        matrix.push(currentRow)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    matrix.forEach(x => console.log(x.join(' ')))
}
orbitscreation([5, 5, 2, 3])