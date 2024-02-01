function subSum(array, startIndex, endIndex) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1
    }

    let sum = 0

    for (let i = startIndex; i <= endIndex; i++) {
        if (typeof array[i] !== 'number') {
            return NaN;
        }
        sum += array[i]
    }

    console.log(sum)
}
subSum([10, 20, 'twenty', 40, 50, 60], 2, 300)