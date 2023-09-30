function reading(pageNum, pagesAnHour, daysReading) {
    let totalHoursNeeded = pageNum / pagesAnHour
    let hoursPerDay = totalHoursNeeded / daysReading

    console.log(hoursPerDay)
}
reading()