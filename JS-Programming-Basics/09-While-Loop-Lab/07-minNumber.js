function minNumber(input) {
    let index = 0
    let myMaxNumber = Number.MAX_SAFE_INTEGER

    let command = input[index]
    index++

    while (command !== "Stop") {
        let num = Number(command)

        if (myMaxNumber > num) {
            myMaxNumber = num
        }

        command = input[index];
        index++
    }
    console.log(myMaxNumber)
}
minNumber()