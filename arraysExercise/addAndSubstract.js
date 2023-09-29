function addAndSubstract(arr) {
    let oldSum = 0
    let newSum = 0

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        oldSum += num // oldsum is having our old #s sum
        if (num % 2 == 0) {
            num += i
        } else {
            num -= i
        }
        newSum += num
        arr[i] = num // replacing the numbers with the new ones, modifying the array
    }


    console.log(arr)
    console.log(oldSum)
    console.log(newSum)

}
addAndSubstract([5, 15, 23, 56, 35])