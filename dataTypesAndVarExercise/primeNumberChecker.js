function primeNumber(num) {
    if (num <= 0 || num == 1) {
        console.log('false')
    } else if (num == 2 || num == 3 || num == 5 || num == 7) {
        console.log('true')
    } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
        console.log('false')
    } else if (Math.sqrt(num) % 1 == 0) {
        console.lof('false')
    } else {
        console.log('true')
    }

}
primeNumber(13)