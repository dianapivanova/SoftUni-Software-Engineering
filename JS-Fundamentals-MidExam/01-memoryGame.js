function memoryGame(arr) {
    let sequenceOfEls = arr.shift().split(" ")

    let numberOfMoves = 0
    let isFinish = false

    for (let i = 0; i < arr.length - 1; i++) {
        let tokens = arr[i].split(' ')
        let index1 = Number(tokens[0])
        let index2 = Number(tokens[1])

        if (sequenceOfEls.length == 0) {
            console.log(`You have won in ${numberOfMoves} turns!`); isFinish = true; break;
        }

        numberOfMoves++

        if (
            index1 < 0 || index1 >= sequenceOfEls.length ||
            index2 < 0 || index2 >= sequenceOfEls.length || index1 === index2) {
            let addedEl = `-${numberOfMoves}a`
            sequenceOfEls.splice(Math.trunc(sequenceOfEls.length / 2), 0, addedEl, addedEl)
            console.log('Invalid input! Adding additional elements to the board')
        } else if (sequenceOfEls[index1] === sequenceOfEls[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequenceOfEls[index1]}!`)
            sequenceOfEls.splice(index1, 1)
            if (index2 !== 0) {
                sequenceOfEls.splice(index2 - 1, 1)
            } else {
                sequenceOfEls.splice(index2, 1)
            }

        } else {
            console.log('Try again!')
        }

    }

    if (!isFinish) {
        if (sequenceOfEls.length > 0) {
            console.log(`Sorry you lose :(`)
            console.log(`${sequenceOfEls.join(' ')}`)
        } else {
            console.log(`You have won in ${numberOfMoves} turns!`);
        }
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "0 0",
    "1 0",
    "1 0",
    "end"
])
