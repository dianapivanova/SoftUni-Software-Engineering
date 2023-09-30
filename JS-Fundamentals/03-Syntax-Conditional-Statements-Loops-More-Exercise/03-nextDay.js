function nextDay2(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay2()