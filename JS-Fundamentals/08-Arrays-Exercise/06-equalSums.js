function equalSums(arr) {
    let result = 'no'

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]
        let leftSide = 0
        let rightSide = 0

        for (let j = 0; j < i; j++) {
            leftSide += arr[j]
        }

        for (let k = arr.length - 1; k > i; k--) {
            rightSide += arr[k]
        }

        if (leftSide == rightSide) {
            result = i; break;
        }
    }

    console.log(result)
}
equalSums([1, 2, 3, 3])