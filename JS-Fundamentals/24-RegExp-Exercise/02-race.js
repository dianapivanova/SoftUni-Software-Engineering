function race(array) {
    let participants = array.shift().split(', ')
    let partObj = {}
    participants.forEach(x => partObj[x] = 0)

    let namePattern = /[A-Za-z]/g
    let kmPattern = /\d/g

    let command = array.shift()

    while (command !== 'end of race') {
        let nameMatch = command.match(namePattern)
        let name = nameMatch.join('')
        let kmArray = command.match(kmPattern)
        let totalKm = 0

        for (let km of kmArray) {
            km = Number(km)
            totalKm += km
        }

        if (name in partObj) {
            partObj[name] += totalKm
        }

        command = array.shift()
    }

    let sortedArr = Object.entries(partObj).sort((a, b) => (b[1] - a[1]))

    console.log(`1st place: ${sortedArr[0][0]}`)
    console.log(`2nd place: ${sortedArr[1][0]}`)
    console.log(`3rd place: ${sortedArr[2][0]}`)
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

// race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
// 'Mi*&^%$ch123o!#$%#nne787) ',
// '%$$B(*&&)i89ll)*&) ',
// 'R**(on%^&ald992) ',
// 'T(*^^%immy77) ',
// 'Ma10**$#g0g0g0i0e',
// 'end of race']
// )