function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let numAsString = num.toString()
        let reversedNum = numAsString.split('').reverse().join("")

        if (num == reversedNum) {
            console.log('true')
        } else {
            console.log('false')
        }
    }

}
palindromeIntegers([123, 323, 421, 121])