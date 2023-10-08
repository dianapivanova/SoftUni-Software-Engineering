function perfectNum(num) {

    let result = 0
    let isPerfect = false

    for (let i = 1; i < num; i++) {

        if (num % i == 0) {
            result += i
        }

    }

    if (num == result) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}
perfectNum(20)