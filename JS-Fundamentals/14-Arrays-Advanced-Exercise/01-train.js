function trainProblem(array) {
    let wagons = array.shift().split(" ").map(Number)
    let maxCapacity = Number(array.shift())

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ')
        if (tokens[0] == "Add") {
            let newWagon = Number(tokens[1])
            wagons.push(newWagon)
        } else {
            let passengers = Number(tokens[0])
            for (let j = 0; j < wagons.length; j++) {
                if (passengers + wagons[j] <= maxCapacity) {
                    wagons[j] += passengers; break;
                } else {
                    continue;
                }
            }

        }
    }

    console.log(wagons.join(" "))
}
trainProblem(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
