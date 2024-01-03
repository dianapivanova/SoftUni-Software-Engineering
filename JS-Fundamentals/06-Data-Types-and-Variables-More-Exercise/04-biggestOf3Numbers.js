function numbers(num1, num2, num3) {
    let maxNum = 0

    if (Math.max(num1, num2) > Math.max(num2, num3)) {
        maxNum = Math.max(num1, num2)
    } else {
        maxNum = Math.max(num2, num3)
    }

    console.log(maxNum)
}
numbers(-2, 7, 3)