function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let points = 0
    let wins = 0

    for (index = 2; index <= input.length; index++) {
        let currentrow = input[index]
        switch (currentrow) {
            case 'W': points += 2000; wins++; break;
            case 'F': points += 1200; break;
            case 'SF': points += 720; break;
        }

    }

    console.log(`Final points: ${(Math.floor(points + startingPoints))}`)
    console.log(`Average points: ${(Math.floor((points) / tournaments))}`)
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`)
}
tennisRanklist((["5", "1400", "F", "SF", "W", "W", "SF"]))