function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judgesNumber = Number(input[2]);

    for (let index = 3; index < input.length; index++) {
        let judgeName = input[index];
        index++
        let judgePoints = Number(input[index])
        let points = judgeName.length * judgePoints / 2
        startingPoints += points

        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`); break;
        }
    }

    if (startingPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }

}
oscars()