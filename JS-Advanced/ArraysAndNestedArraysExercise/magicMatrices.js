function magicMatrices(matrix) {

    let rowSum = matrix[0].reduce((acc, value) => (acc + value))

    for (let row = 1; row < matrix.length; row++) {
        let currentRowSum = 0
        currentRowSum = matrix[row].reduce((acc, value) => acc + value);
        if (currentRowSum !== rowSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currentColNum = 0;

        for (let row = 0; row < matrix.length; row++) {
            currentColNum += matrix[row][col]
        }

        if (currentColNum !== rowSum) {
            return false;
        }
    }

    return true;

}

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]

)