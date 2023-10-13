function shootForTheWin(arr) {
    let targets = arr.shift().split(" ").map(Number);
    let index = 0;
    let command = arr[index];
    let shots = 0;

    while (command !== "End") {
        let indexOfTheTarget = Number(command);

        if (indexOfTheTarget >= 0 && indexOfTheTarget < targets.length && targets[indexOfTheTarget] !== -1) {
            let currentTarget = targets[indexOfTheTarget];

            for (let i = 0; i < targets.length; i++) {
                if (i !== indexOfTheTarget && targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }

            targets[indexOfTheTarget] = -1;
            shots++;
        }

        index++;
        command = arr[index];
    }

    console.log(`Shot targets: ${shots} -> ${targets.join(' ')}`);
}

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
