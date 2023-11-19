function matchDates([dateArr]) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g

    let match = pattern.exec(dateArr)

    while (match !== null) {

        let { day, month, year } = match.groups //  the result of a match contains a groups property that is an object with named capturing groups.
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)

        match = pattern.exec(dateArr)
    }


}
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])