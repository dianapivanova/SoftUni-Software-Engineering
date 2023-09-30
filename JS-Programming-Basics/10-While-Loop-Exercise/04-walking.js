function exercise2(input) {
    let index = 0
    let stepsCounter = 0
    let row = input[index]


    while (row !== "Going home") {

        let steps = Number(row)
        stepsCounter += steps;

        if (stepsCounter >= 10000) {
            console.log("Goal reached! Good job!")
            console.log(`${stepsCounter - 10000} steps over the goal!`)
            break;
        }
        index++
        row = input[index];

    }

    if (row === "Going home") {
        let stepsToHome = Number(input[index + 1])

        stepsCounter += stepsToHome

        if (stepsCounter >= 10000) {
            console.log("Goal reached! Good job!")
            console.log(`${stepsCounter - 10000} steps over the goal!`)
        } else {
            console.log(`${10000 - stepsCounter} more steps to reach goal.`)
        }

    }

}
exercise2()