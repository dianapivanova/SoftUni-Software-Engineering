function shootForTheWin(arr) {
    let targets = arr.shift().split(" ").map(Number)
    let shots = 0
    let index = 0;
    let command = arr[index];

    while (command !== "End") {
        let indice = Number(command)

        if (!(indice < 0 || indice >= targets.length || targets[indice] == -1)) {

            for (let j = 0; j < targets.length; j++) {
                if (!(targets[j] == -1 || j == indice)) {
                    if (targets[j] > targets[indice]) {
                        targets[j] -= targets[indice]
                    } else {
                        targets[j] += targets[indice]
                    }
                }

            }
            targets[indice] = -1
            shots++
        }

        index++;
        command = arr[index];
    }
    console.log(`Shot targets: ${shots} -> ${targets.join(" ")}`)

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])


