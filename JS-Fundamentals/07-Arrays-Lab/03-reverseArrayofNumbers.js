function reverse(n, numbers) {
    let newArray = []

    for (let i = n - 1; i >= 0; i--) {
        newArray.push(numbers[i])
    }

    console.log(newArray.join(' '))

}
reverse(3, [10, 20, 30, 40, 50])