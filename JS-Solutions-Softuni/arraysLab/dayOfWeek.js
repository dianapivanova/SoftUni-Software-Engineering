function dayOfWeek(dayNum) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let result = days[dayNum - 1]

    if (dayNum < 1 || dayNum > 7) {
        console.log('Invalid day!')
    } else {
        console.log(result)
    }
}
dayOfWeek(7)