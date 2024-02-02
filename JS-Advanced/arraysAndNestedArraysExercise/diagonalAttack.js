function diagonalAttack(array) {
    let matrix = []

    for (let row of array) {
        matrix.push(row.split(' ').map(x => Number(x)))
    }

    let firstDiagonalSum = 0
    let secondDiagonalSum = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (row == col) {
                firstDiagonalSum += matrix[row][col]
            }

            if (col == matrix[row].length - 1 - row) {
                secondDiagonalSum += matrix[row][col]
            }
        }
    }

    if (firstDiagonalSum !== secondDiagonalSum) {
        matrix.forEach(row => console.log(row.join(" "))); return;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (row !== col && col !== matrix[row].length - 1 - row) {
                matrix[row][col] = firstDiagonalSum
            }
        }
    }

    matrix.forEach(row => console.log(row.join(" ")))
}
diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']

)