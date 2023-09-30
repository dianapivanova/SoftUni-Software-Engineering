function evenAndOdd(arr) {
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            evenSum += Number(arr[i])
        } else {
            oddSum += Number(arr[i])
        }
    }
    console.log(evenSum - oddSum)

}
evenAndOdd([3, 5, 7, 9])