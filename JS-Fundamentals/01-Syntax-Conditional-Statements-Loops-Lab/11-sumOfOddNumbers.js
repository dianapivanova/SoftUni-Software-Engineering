function sumOfOddNumbers(num) {
    let sum = 0
    let counter = 0
    for (let i = 1; i <= 100; i += 2) {
        counter++
        if (counter == num + 1) {
            break;
        }
        console.log(i)
        sum += i

    }
    console.log(`Sum: ${sum}`)

}
sumOfOddNumbers()