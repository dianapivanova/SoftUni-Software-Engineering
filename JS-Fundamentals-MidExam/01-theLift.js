function theLift(array) {
    let tourists = Number(array.shift())
    let wagons = array[0].split(' ').map(Number)
    let isFull = true;

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] == 4) {
            continue;
        } else {
            if (tourists <= 4 - wagons[i]) {
                wagons[i] += tourists
                tourists = 0
            } else {
                tourists -= 4 - wagons[i]
                wagons[i] = 4
            }
        }
    }

    for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] !== 4) {
            isFull = false; break;
        }
    }

    if (tourists == 0 && isFull) {
        console.log(wagons.join(" "))
    } else if (tourists == 0 & !isFull) {
        console.log(`The lift has empty spots!`)
        console.log(wagons.join(' '))
    } else if (tourists > 0 && isFull) {
        console.log(`There isn't enough space! ${tourists} people in a queue!`)
        console.log(wagons.join(' '))
    }

}

theLift([
    "15",
    "0 0 0 0 0"
])
