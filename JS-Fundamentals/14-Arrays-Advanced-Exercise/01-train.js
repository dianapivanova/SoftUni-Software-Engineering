function trainProblem(array) {
    let train = array.shift().split(" ").map(Number)
    let capacity = array.shift()

    for (let i = 0; i < array.length; i++) {
        let tokens = (array[i]).split(' ')

        if (tokens[0] == "Add") {
            let passengers = tokens[1]
            train.push(passengers)
        } else {
            let passengers = Number(tokens[0])
            for (let j = 0; j < train.length; j++) {
                if (train[j] + passengers <= capacity) {
                    train[j] += passengers
                    break;
                }
            }
        }

    }

    console.log(train.join(" "))
}
trainProblem(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
