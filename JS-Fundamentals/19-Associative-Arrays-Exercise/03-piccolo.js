function piccolo(array) {

    let parking = []

    for (let cars of array) {
        let [command, carNum] = cars.split(', ')

        if (command == "IN") {
            if (!parking.includes(carNum)) {
                parking.push(carNum)
            }
        } else if (command == "OUT") {
            if (parking.includes(carNum)) {
                let idx = parking.indexOf(carNum)
                parking.splice(idx, 1)
            }
        }
    }

    if (parking.length > 0) {
        parking = parking.sort((a, b) => a.localeCompare(b))
        console.log(parking.join('\n'))
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