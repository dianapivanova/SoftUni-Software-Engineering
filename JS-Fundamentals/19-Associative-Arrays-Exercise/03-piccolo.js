function piccolo(array) {
    let cars = []

    for (let curRow of array) {
        let tokens = curRow.split(', ')
        let command = tokens[0]
        let carNum = tokens[1]

        if (command == "IN") {
            if (!cars.includes(carNum)) {
                cars.push(carNum)
            }
        } else if (command == "OUT") {
            if (cars.includes(carNum)) {
                let idx = cars.indexOf(carNum)
                cars.splice(idx, 1)
            }
        }
    }


    if (cars.length > 0) {
        cars = cars.sort((a, b) => (a.localeCompare(b)))
        console.log(cars.join('\n'))
    } else {
        console.log('Parking Lot is Empty')
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])