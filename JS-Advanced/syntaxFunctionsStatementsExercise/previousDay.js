function previousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day - 1)
    let newYear = myDate.getFullYear
    let newMonth = myDate.getMonth
    let newDay = myDate.getDate

    console.log(`${newYear}-${newMonth}-${newDay}`)
}
previousDay(2015, 5, 10)