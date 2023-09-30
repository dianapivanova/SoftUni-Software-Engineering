function sumOfNumbers(input) {
    let numAsString = String(input[0])
    let sum = 0

    for (let i = 0; i < numAsString.length; i++) {
        let ch = Number(numAsString[i])
        sum = sum + ch;

    }
    console.log("The sum of the digits is:" + sum)
}
sumOfNumbers(["1234"])