function counterStrike(input) {
    let index = 0
    let energy = Number(input[index]);
    index++
    let distance = input[index];
    let gamesWon = 0;

    while (distance != "End of battle") {

        let numDistance = Number(distance);

        if (energy >= numDistance) {
            gamesWon++;
            energy -= numDistance;
        } else {
            console.log(`Not enough energy! Game ends with ${gamesWon} won battles and ${energy} energy`);
            energy -= numDistance;
            break;
        }

        if (gamesWon % 3 === 0) {
            energy += gamesWon;
        }

        index++
        distance = input[index]
    }

    if (energy >= 0) {
        console.log(`Won battles: ${gamesWon}. Energy left: ${energy}`);
    }
}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])


