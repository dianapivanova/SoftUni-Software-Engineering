function daysOfWeek(day) {
    weekDays = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    if (weekDays[day] == undefined) {
        console.log('error')
    } else {
        console.log(weekDays[day])
    }

}
daysOfWeek('Montffday')