function nfs3(array) {
    let carNum = Number(array.shift())
    let cars = []

    for (let i = 0; i < carNum; i++) {
        let [model, mileage, fuel] = array.shift().split('|')
        mileage = Number(mileage)
        fuel = Number(fuel)
        let carObj = { model, mileage, fuel }
        cars.push(carObj)
    }

    let command = array.shift()

    while (command !== 'Stop') {
        let tokens = command.split(' : ')
        let action = tokens[0]

        if (action == 'Drive') {
            let driveModel = tokens[1]
            let driveDistance = Number(tokens[2])
            let driveFuel = Number(tokens[3])

            let findCar = cars.find(x => x.model == driveModel)


            if (findCar.fuel >= driveFuel) {
                findCar.mileage += driveDistance
                findCar.fuel -= driveFuel
                console.log(`${driveModel} driven for ${driveDistance} kilometers. ${driveFuel} liters of fuel consumed.`)
            } else {
                console.log(`Not enough fuel to make that ride`)
            }

            if (findCar.mileage >= 100000) {
                let idx = cars.indexOf(findCar)
                cars.splice(idx, 1)
                console.log(`Time to sell the ${driveModel}!`)
            }

        } else if (action == 'Refuel') {
            let refuelCar = tokens[1]
            let refueledFuel = Number(tokens[2])

            let findCar = cars.find(x => x.model == refuelCar)


            let refueling = 0
            if (findCar.fuel + refueledFuel >= 75) {
                refueling = 75 - findCar.fuel
            } else {
                refueling = refueledFuel
            }

            findCar.fuel += refueling
            console.log(`${refuelCar} refueled with ${refueling} liters`)


        } else if (action == 'Revert') {
            let carRevert = tokens[1]
            let km = Number(tokens[2])

            let findCar = cars.find(x => x.model == carRevert)


            findCar.mileage -= km
            if (findCar.mileage < 10000) {
                findCar.mileage = 10000
            } else {
                console.log(`${carRevert} mileage decreased by ${km} kilometers`)
            }

        }

        command = array.shift()
    }

    for (let row of cars) {
        console.log(`${row.model} -> Mileage: ${row.mileage} kms, Fuel in the tank: ${row.fuel} lt.`)

    }
}
nfs3([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])