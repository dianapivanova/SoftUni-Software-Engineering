function solve(input) {
    let peopleInQueue = Number(input.shift());
    let wagons = input.toString().split(" ").map(Number);

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            if (peopleInQueue >= 4 - wagons[i]) { // if people are more than the sports in the wagon, people in the wagon = spots and wagon is full
                peopleInQueue -= 4 - wagons[i];
                wagons[i] = 4;
            } else { // people are less than the spots in the wagon, people will be 0 and spots will be fullfilled with # of people
                wagons[i] += peopleInQueue;
                peopleInQueue = 0;
            }
        }
    }

    let isEmpty = false;

    for (let i = 0; i < wagons.length; i++) {
        let currenEl = wagons[i];

        if (currenEl < 4) {
            isEmpty = true;
        }
    }

    if (!isEmpty && peopleInQueue > 0) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
    }

    if (isEmpty && peopleInQueue == 0) {
        console.log("The lift has empty spots!");
    }

    console.log(wagons.join(" "));
}

theLift([
    "",
    "5 5 5"
])
