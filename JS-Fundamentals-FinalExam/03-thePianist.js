function thePianist(array) {
    let piecesNum = Number(array.shift())
    let pieces = []

    for (let i = 0; i < piecesNum; i++) {
        let [piece, composer, key] = array.shift().split('|')
        let pieceObj = { piece, composer, key }
        pieces.push(pieceObj)
    }

    let command = array.shift()

    //Remove|{piece}":

    while (command !== 'Stop') {
        let tokens = command.split('|')
        let action = tokens[0]

        if (action == 'Add') {
            let pieceAdd = tokens[1]
            let composerAdd = tokens[2]
            let keyAdd = tokens[3]

            let pieceFind = pieces.find(x => x.piece === pieceAdd)
            if (pieceFind) {
                console.log(`${pieceAdd} is already in the collection!`)
            } else {
                pieces.push({ piece: pieceAdd, composer: composerAdd, key: keyAdd })
                console.log(`${pieceAdd} by ${composerAdd} in ${keyAdd} added to the collection!`)
            }
        } else if (action == 'Remove') {
            let pieceRemove = tokens[1]
            let pieceFind = pieces.find(x => x.piece === pieceRemove)

            if (pieceFind) {
                let idx = pieces.indexOf(pieceFind)
                pieces.splice(idx, 1)
                console.log(`Successfully removed ${pieceRemove}!`)
            } else {
                console.log(`Invalid operation! ${pieceRemove} does not exist in the collection.`)
            }

        } else if (action == 'ChangeKey') {
            let changePiece = tokens[1]
            let changeKey = tokens[2]
            let pieceFind = pieces.find(x => x.piece === changePiece)

            if (pieceFind) {
                pieceFind.key = changeKey
                console.log(`Changed the key of ${changePiece} to ${changeKey}!`)
            } else {
                console.log(`Invalid operation! ${changePiece} does not exist in the collection.`)
            }
        }

        command = array.shift()
    }

    for (let row of pieces) {
        console.log(`${row.piece} -> Composer: ${row.composer}, Key: ${row.key}`)
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])