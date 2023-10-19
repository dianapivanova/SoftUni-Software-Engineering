function memoryGame(arr) {
    let matchingElsArray = arr.shift().split(" ")

    let command = arr.shift()
    let moves = 0
    let hasWon = false

    while (command !== "end") {

        if (matchingElsArray.length == 0) {
            console.log(`You have won in ${moves} turns!`); hasWon = true; break;
        }

        moves++
        let tokens = command.split(' ')
        let idx1 = Number(tokens[0])
        let idx2 = Number(tokens[1])

        if (idx1 < 0 || idx1 >= matchingElsArray.length
            || idx2 < 0 || idx2 >= matchingElsArray.length
            || idx1 == idx2) {
            let addedEl = `-${moves}a`
            matchingElsArray.splice(Math.trunc(matchingElsArray.length / 2), 0, addedEl, addedEl)
            console.log('Invalid input! Adding additional elements to the board')
            command = arr.shift()
            continue;
        }

        if (matchingElsArray[idx1] === matchingElsArray[idx2]) {
            console.log(`Congrats! You have found matching elements - ${matchingElsArray[idx1]}!`)
            matchingElsArray.splice(Math.max(idx1, idx2), 1)
            matchingElsArray.splice(Math.min(idx1, idx2), 1)
        } else {
            console.log(`Try again!`)
        }

        command = arr.shift()
    }

    if (matchingElsArray.length > 0) {
        console.log(`Sorry you lose :(`)
        console.log(matchingElsArray.join(' '))
    } else if (matchingElsArray == 0 & hasWon == false) {
        console.log(`You have won in ${moves} turns!`)
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)
