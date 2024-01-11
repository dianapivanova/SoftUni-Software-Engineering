function roadRadar(speed, area) {
    let limitSpeed = { 'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20 }


    if (speed <= limitSpeed[area]) {
        console.log(`Driving ${speed} km/h in a ${limitSpeed[area]} zone`)
    } else {
        let status = ''
        let overLimit = speed - limitSpeed[area]
        if (overLimit <= 20) {
            status = 'speeding'
        } else if (overLimit <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limitSpeed[area]} - ${status}`)
    }
}
roadRadar(40, 'city')