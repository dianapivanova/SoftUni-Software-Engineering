function reception(arr) {

    let employee1Capacity = Number(arr[0])
    let employee2Capacity = Number(arr[1])
    let employee3Capacity = Number(arr[2])
    let hours = 0
    let totalCapacityperHour = employee1Capacity + employee2Capacity + employee3Capacity

    let totalStudents = arr[3]

    while (totalStudents > 0) {
        hours++;
        if (hours % 4 == 0) {
            continue;
        }

        totalStudents -= totalCapacityperHour

    }

    console.log(`Time needed: ${hours}h.`)

}
reception(['3', '2', '5', '40'])