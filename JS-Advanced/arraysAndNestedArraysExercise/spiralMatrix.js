function createSpiralMatrix(rows, cols) {
    let matrix = []

    for (let i = 0; i < rows; i++) {
        let currentRow = []
        for (let j = 0; j < cols; j++) {
            currentRow.push('X')
        }
        matrix.push(currentRow)
    }

    let startCol = 0
    let endCol = cols - 1
    let startRow = 0;
    let endRow = rows - 1
    let num = 1

    while (startCol <= endCol && startRow <= endRow) {
        //to fill the first row
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num;
            num++
        }
        startRow++

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = num;
            num++
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = num;
            num++
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = num;
            num++
        }
        startCol++
    }

    matrix.forEach(x => console.log(x.join(' ')))
}
createSpiralMatrix(5, 5);
