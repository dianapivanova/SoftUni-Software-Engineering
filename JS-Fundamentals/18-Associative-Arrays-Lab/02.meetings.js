function meetings(array) {
    let schedule = {}

    for (let tokens of array) {
        let [day, name] = tokens.split(' ')

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
            continue;
        } else {
            console.log(`Scheduled for ${day}`)
            schedule[day] = name
        }

    }

    for (let [day, name] of Object.entries(schedule)) {
        console.log(`${day} -> ${name}`)
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])