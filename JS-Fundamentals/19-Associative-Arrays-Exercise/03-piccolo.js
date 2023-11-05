function piccolo(array) {

    let carNums = []

    for (let row of array) {
        let [command, carNumber] = row.split(', ')

        if (command == "IN") {
            if (!carNums.includes(carNumber)) {
                carNums.push(carNumber)
            }
        } else {
            if (carNums.includes(carNumber)) {
                let idx = carNums.indexOf(carNumber)
                carNums.splice(idx, 1)
            }
        }
    }

    if (carNums.length > 0) {
        carNums.sort((a, b) => a.localeCompare(b))
        console.log(carNums.join('\n'))

    } else {
        console.log('Parking Lot is Empty')
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)