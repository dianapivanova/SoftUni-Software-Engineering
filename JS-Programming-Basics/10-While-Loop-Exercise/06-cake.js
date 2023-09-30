function cake(input) {
    let width = Number(input[0])
    let length = Number(input[1])
    let totalPieces = width * length
    let index = 2
    let row = input[index]
    let pieceCounter = 0

    while (row !== "STOP") {
        let pieces = Number(row);
        pieceCounter += pieces;

        if (pieceCounter >= totalPieces) {
            console.log(`No more cake left! You need ${pieceCounter - totalPieces} pieces more.`); break;
        }

        index++
        row = input[index];

    }

    if (row === "STOP") {

        if (pieceCounter >= totalPieces) {
            console.log(`No more cake left! You need ${pieceCounter - totalPieces} pieces more.`);
        } else {
            console.log(`${totalPieces - pieceCounter} pieces are left.`)
        }

    }

}
cake()