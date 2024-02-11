function subSum(array, startIndex, endIndex) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        let num = array[i]
        if (isNaN(num)) {
            return NaN;
        }
        sum += num
    }

    return sum;
}
subSum([10, 20, 'twenty', 40, 50, 60], 2, 300)