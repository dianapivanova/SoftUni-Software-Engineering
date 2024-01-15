function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let rowOne = matrix[i].reduce((acc, value) => acc + value, 0);
        let rowTwo = matrix[i + 1].reduce((acc, value) => acc + value, 0);
        let colOne = matrix.reduce((acc, value) => acc + value[i], 0);
        let colTwo = matrix.reduce((acc, value) => acc + value[i + 1], 0);

        if (rowOne !== rowTwo || colOne !== colTwo) {
            return false;
        }
    }

    return true;
}

magicMatrices([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])