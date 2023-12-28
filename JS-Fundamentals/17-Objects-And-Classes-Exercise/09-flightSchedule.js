function flightSchedule([statuses, changedStatuses, checkStatus]) {
    let schedule = []

    for (let flightData of statuses) {
        let tokens = flightData.split(' ')
        let flightNum = tokens.shift()
        let destination = tokens.join(' ')
        let flightInfo = { flightNum: flightNum, destination: destination }
        schedule.push(flightInfo)
    }

    for (let changedStatus of changedStatuses) {
        let [flightNum, newStatus] = changedStatus.split(' ')
        let findFlight = schedule.find(x => x.flightNum == flightNum)

        if (findFlight) {
            findFlight.status = newStatus
        }
    }

    let resultArray = []

    if (checkStatus[0] == 'Ready to fly') {
        for (let flight of schedule) {
            if (!flight.status) {
                resultArray.push({ 'Destination': flight.destination, 'Status': 'Ready to fly' })
            }
        }
    } else {
        for (let flight of schedule) {
            if (flight.status) {
                resultArray.push({ 'Destination': flight.destination, 'Status': 'Cancelled' })
            }
        }
    }


    for (let els of resultArray) {
        console.log(els)
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])