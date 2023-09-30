function reverse(n, numbers) {
    let result = ''

    for (let i = n - 1; i >= 0; i--) {
        result += numbers[i] + ' '
    }

    console.log(result)


}
reverse(4, [-1, 20, 99, 5])