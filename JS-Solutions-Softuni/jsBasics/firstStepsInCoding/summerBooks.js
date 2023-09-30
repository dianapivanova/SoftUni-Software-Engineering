function homeworkBooks(input) {
    let pagesNumber = Number(input[0])
    let pagesPerHour = Number(input[1])
    let daysNumber = Number(input[2])

    let totalReadingTime = pagesNumber / pagesPerHour
    let hoursPerDay = totalReadingTime / daysNumber

    console.log(hoursPerDay)
}
homeworkBooks(["212 ", "20 ", "2 "])