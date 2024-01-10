function daysInAMonth(month, year) {
    let daysInAYear = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }

    if (year % 4 == 0) {
        daysInAYear[2] = 29
    }

    console.log(daysInAYear[month])
}
daysInAMonth(2, 2012)