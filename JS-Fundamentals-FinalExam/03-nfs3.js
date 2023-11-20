function nfs3(array) {
    let carNum = Number(array.shift())
    let cars = []

    for (let i = 0; i < carNum; i++) {
        let command = array.shift()
        let [model, distance, fuel] = command.split('|')
        distance = Number(distance)
        fuel = Number(fuel)
        let car = { model: model, distance: distance, fuel: fuel }

        cars.push(car)
    }

    let command = array.shift()

    while (command !== 'Stop') {
        if (command.includes('Drive')) {
            let tokens = command.split(' : ')
            let car = tokens[1]
            let distance = Number(tokens[2])
            let fuel = Number(tokens[3])

            let lookedCar = cars.find(x => x.model == car)

            if (lookedCar.fuel >= fuel) {
                lookedCar.fuel -= fuel
                lookedCar.distance += distance
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            } else {
                console.log('Not enough fuel to make that ride')
            }

            if (lookedCar.distance >= 100000) {
                console.log(`Time to sell the ${car}!`)
                let idx = cars.findIndex(x => x.model == car)
                cars.splice(idx, 1)
            }

        } else if (command.includes('Refuel')) {
            let tokens = command.split(' : ')
            let car = tokens[1]
            let fuel = Number(tokens[2])

            let lookedCar = cars.find(x => x.model == car)

            let refilledFuel = 0

            if (lookedCar.fuel + fuel <= 75) {
                refilledFuel = fuel
                lookedCar.fuel += refilledFuel
            } else {
                refilledFuel = 75 - lookedCar.fuel
                lookedCar.fuel += refilledFuel
            }

            console.log(`${car} refueled with ${refilledFuel} liters`)

        } else if (command.includes('Revert')) {
            let tokens = command.split(' : ')
            let car = tokens[1]
            let kilometres = Number(tokens[2])

            let lookedCar = cars.find(x => x.model == car)

            lookedCar.distance -= kilometres

            if (lookedCar.distance >= 10000) {
                console.log(`${car} mileage decreased by ${kilometres} kilometers`)
            } else {
                lookedCar.distance = 10000
            }
        }

        command = array.shift()
    }

    cars.forEach(x => console.log(`${x.model} -> Mileage: ${x.distance} kms, Fuel in the tank: ${x.fuel} lt.`))
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