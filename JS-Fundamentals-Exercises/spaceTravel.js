function spaceTravel(array) {
    let travelRoute = array.shift().split('||')
    let fuel = Number(array.shift())
    let ammunition = Number(array.shift())

    for (let command of travelRoute) {
        let [action, points] = command.split(' ')
        points = Number(points)

        if (action == 'Travel') {
            if (fuel >= points) {
                fuel -= points
                console.log(`The spaceship travelled ${points} light-years.`)
            } else {
                console.log('Mission failed.'); break;
            }
        } else if (action == 'Enemy') {
            if (ammunition >= points) {
                ammunition -= points
                console.log(`An enemy with ${points} armour is defeated.`)
            } else if (fuel >= points * 2) {
                fuel -= points * 2
                console.log(`An enemy with ${points} armour is outmaneuvered.`)
            } else {
                console.log('Mission failed.'); break;
            }
        } else if (action == 'Repair') {
            fuel += points
            ammunition += points * 2
            console.log(`Ammunitions added: ${points * 2}.`)
            console.log(`Fuel added: ${points}.`)
        } else {
            console.log('You have reached Titan, all passengers are safe.'); break;
        }
    }

}
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',

    '60',

    '100'])