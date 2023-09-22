function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day); // gets the input info in date format
    date.setDate(date.getDate() + 1); // gets the new date in a date format
    let newYear = date.getFullYear(); // pulls the year from the new date
    let newMonth = date.getMonth() + 1; // pulls the months from the new date
    let newDate = date.getDate(); // pulls the day from the new date

    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 9, 30)