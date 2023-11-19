function thePianist(array) {
    let pieceCount = Number(array.shift())
    let piecesArr = []

    for (let i = 0; i < pieceCount; i++) {
        let [name, compositor, key] = array.shift().split('|')
        let pieceObj = { name: name, compositor: compositor, key: key }
        piecesArr.push(pieceObj)
    }

    let command = array.shift()

    while (command !== "Stop") {
        let tokens = command.split('|')

        if (tokens.includes('Add')) {
            let name = tokens[1]
            let compositor = tokens[2]
            let key = tokens[3]

            let existingPiece = piecesArr.find(x => x.name === name)

            if (existingPiece) {
                console.log(`${name} is already in the collection!`)
            } else {
                let pieceObj = { name: name, compositor: compositor, key: key }
                piecesArr.push(pieceObj)
                console.log(`${name} by ${compositor} in ${key} added to the collection!`)
            }
        } else if (tokens.includes('Remove')) {
            let name = tokens[1]
            let pieceIndex = piecesArr.findIndex(piece => piece.name === name)

            if (pieceIndex !== -1) {
                piecesArr.splice(pieceIndex, 1)
                console.log(`Successfully removed ${name}!`)
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
        } else if (tokens.includes('ChangeKey')) {
            let name = tokens[1]
            let newKey = tokens[2]

            let existingPiece = piecesArr.find(piece => piece.name === name)

            if (existingPiece) {
                existingPiece.key = newKey
                console.log(`Changed the key of ${name} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
        }

        command = array.shift()
    }

    for (let pieceObj of piecesArr) {
        console.log(`${pieceObj.name} -> Composer: ${pieceObj.compositor}, Key: ${pieceObj.key}`)
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