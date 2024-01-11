function previousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day)
    myDate.setDate(myDate.getDate() - 1)
    let newYear = myDate.getFullYear()
    let newMonth = myDate.getMonth() + 1
    let newDay = myDate.getDate()

    console.log(`${newYear}-${newMonth}-${newDay}`)
}
previousDay(2016, 9, 30)