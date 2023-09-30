function tennis(input) {
    let tournaments = Number(input[0])
    let startingPoints = Number(input[1])
    let wins = 0
    let currentPoints = 0

    for (let index = 2; index < input.length; index++) {
        let currentRow = input[index];

        switch (currentRow) {
            case "W": currentPoints += 2000; wins++; break;
            case "F": currentPoints += 1200; break;
            case "SF": currentPoints += 720; break;
        }
    }
    let totalPoints = currentPoints + startingPoints

    console.log(`Final points: ${Math.floor(totalPoints)}`)
    console.log(`Average points: ${Math.floor(currentPoints / tournaments)}`)
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`)

}
tennis()