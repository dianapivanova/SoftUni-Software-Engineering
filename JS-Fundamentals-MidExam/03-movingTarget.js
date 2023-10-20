function movingTarget(array) {
    let targets = array.shift().split(' ').map(Number)
    let currentRow = array.shift()

    while (currentRow !== "End") {
        let tokens = currentRow.split(" ")
        let command = tokens[0]
        let idx = Number(tokens[1])

        if (command == "Shoot") {
            let power = Number(tokens[2])
            if (idx < 0 || idx >= targets.length) {
                currentRow = array.shift();
                continue;
            } else {
                targets[idx] -= power
                if (targets[idx] <= 0) {
                    targets.splice(idx, 1)
                }
            }
        } else if (command == "Add") {
            let value = Number(tokens[2])
            if (idx < 0 || idx >= targets.length) {
                console.log("Invalid placement!");
                currentRow = array.shift();
                continue;
            } else {
                targets.splice(idx, 0, value)
            }
        } else if (command == "Strike") {
            let radius = Number(tokens[2])
            if (idx - radius < 0 || idx + radius >= targets.length) {
                console.log("Strike missed!");
                currentRow = array.shift();
                continue;
            } else {
                targets.splice(idx - radius, radius * 2 + 1)
            }

        }
        currentRow = array.shift()
    }

    console.log(targets.join("|"))
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

