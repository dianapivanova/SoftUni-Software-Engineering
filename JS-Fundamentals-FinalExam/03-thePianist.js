function thePianist(array) {
    let piecesNum = Number(array.shift())
    let collection = []

    for (let i = 0; i < piecesNum; i++) {
        let tokens = array.shift()
        let [piece, composer, key] = tokens.split('|')
        let pieceInfo = { piece, composer, key }
        collection.push(pieceInfo)
    }

    let command = array.shift()

    while (command !== 'Stop') {
        let tokens = command.split('|')
        let action = tokens[0]

        if (action == 'Add') {
            let addPiece = tokens[1]
            let addComposer = tokens[2]
            let addKey = tokens[3]
            let findPiece = collection.find(x => x.piece == addPiece)

            if (!findPiece) {
                collection.push({ piece: addPiece, composer: addComposer, key: addKey })
                console.log(`${addPiece} by ${addComposer} in ${addKey} added to the collection!`)
            } else {
                console.log(`${addPiece} is already in the collection!`)
            }
        } else if (action == "Remove") {
            let removedPiece = tokens[1]
            let findPiece = collection.find(x => x.piece == removedPiece)

            if (findPiece) {
                let idx = collection.indexOf(findPiece)
                collection.splice(idx, 1)
                console.log(`Successfully removed ${removedPiece}!`)
            } else {
                console.log(`Invalid operation! ${removedPiece} does not exist in the collection.`)
            }
        } else if (action == 'ChangeKey') {
            let changedPiece = tokens[1]
            let newKey = tokens[2]

            let findPiece = collection.find(x => x.piece == changedPiece)

            if (findPiece) {
                findPiece.key = newKey
                console.log(`Changed the key of ${changedPiece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${changedPiece} does not exist in the collection.`)
            }
        }
        command = array.shift()
    }

    for (let piece of collection) {
        let [name, composer, key] = Object.entries(piece)
        console.log(`${name[1]} -> Composer: ${composer[1]}, Key: ${key[1]}`)
    }
}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])