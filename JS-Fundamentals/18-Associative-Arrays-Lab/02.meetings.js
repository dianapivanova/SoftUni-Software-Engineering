function meetings(array) {
    let calendar = {}

    for (let entries of array) {
        let [day, name] = entries.split(' ')

        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        } else {
            calendar[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let entries of Object.entries(calendar)) {
        console.log(`${entries[0]} -> ${entries[1]}`)
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])