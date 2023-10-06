function ladybugs(arr) {
    let fieldSize = arr[0]
    let ladyBugsIndexes = arr[1].split(" ").map(Number)
    let field = []

    for (let i = 0; i < fieldSize; i++) {
        if (ladyBugsIndexes.includes(i)) {
            field[i] = 1
        } else {
            field[i] = 0
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let command = arr[j]
        let tokens = command.split(' ')

        let ladybugIndex = Number(tokens[0])
        let direction = tokens[1]
        let flyLength = Number(tokens[2])


        if (!field[ladybugIndex]) {
            continue;
        }

        field[ladybugIndex] = 0;

        if (direction == "left") {
            let newIndex = ladybugIndex - flyLength

            if (newIndex >= 0) {
                while (field[newIndex] == 1) {
                    newIndex -= flyLength
                }

                if (newIndex >= 0) {
                    field[newIndex] = 1
                }

            }
        } else {
            let newIndex = ladybugIndex + flyLength

            if (newIndex < field.length) {
                while (field[newIndex] == 1) {
                    newIndex += flyLength
                }

                if (newIndex < field.length) {
                    field[newIndex] = 1
                }
            }
        }
    }

    console.log(field.join(" "))
}



ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);