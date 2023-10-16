function movingTarget(array) {
    let targets = array.shift().split(' ').map(Number)

    for (let i = 0; i < array.length - 1; i++) {
        let tokens = array[i].split(' ')
        let command = tokens[0]

        if (command == "Shoot") {
            let index = tokens[1]
            let power = Number(tokens[2])

            if (index >= 0 && index < targets.length) {
                targets[index] -= power
                if (targets[index] <= 0) {
                    targets.splice(index, 1)
                }
            } else {
                continue;
            }
        } else if (command == "Add") {
            let index = tokens[1]
            let value = Number(tokens[2])
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value)
            } else {
                console.log("Invalid placement!")
                continue;
            }
        } else if (command == "Strike") {
            let index = Number(tokens[1])
            let radius = Number(tokens[2])

            if (index - radius >= 0 && index + radius < targets.length && index >= 0 && index < targets.length) {
                targets.splice(index - radius, radius * 2 + 1)
            } else {
                console.log("Strike missed!")
                continue;
            }
        }
    }

    console.log(targets.join('|'))
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
