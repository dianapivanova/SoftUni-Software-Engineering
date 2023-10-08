// arr[0] has the field length, [1] has the positions where we have ladybugs, we are transfering into an array
// arr[2+] had the command, we are using an array by the end of the field to check each command
// 1. for loop, we check if there is a ladybug on each index of the new created field array, if not, index is 0 - this is the original starting array
// 2. another for loop which we'll use to create the actions from the commands.
// 2.1 we create variables for each element from the command; 3 elements- the position, the direction and the fly length.
// 2.2. we are checking if the index is empty - (!field[ladybugIndex]) if there is nothing on this index, continue with the next loop;
// 2.3. if the above condition is false, then we will have some kind of action - field[ladybugIndex] = 0; ladybug is moving and it will be 0 because it's flying away
// 2.4. we are creating a new variable newIndex- the place where the ladybug will be landing - checking if the direction is left
// 2.4.1 checking if the index is not outside the field if (newIndex >= 0); field[newIndex] = 1 - we are marking that there is a ladybug there
// 2.4.2 checking if there is not a ladybug already in this field with a while loop - while (field[newIndex] == 1) keep flying until you reach 0
// 2.4.3  newIndex -= flyLength; and one last check if she lands on a valid index -  if (newIndex >= 0) / field[newIndex] = 1
// checking if the direction is right but not with >= 0 - we use < field.length; if it's outside the length, it's gone; and we use ++

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