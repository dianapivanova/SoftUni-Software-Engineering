function employees(array) {
    let names = Number(array.shift())

    let pattern = /(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})\#+(?<profession>[A-Z][a-z]+(&[A-Z][a-z]+){0,2})\d{2,}(?<company>[A-Z][A-Za-z0-9]+ (JSC|Ltd.))/

    for (let row of array) {
        let match = row.match(pattern)

        if (match) {
            let { name, profession, company } = match.groups
            profession = profession.split('&').join(" ")
            console.log(`${name} is ${profession} at ${company}`)
        }
    }
}
employees(["4",
    "Tanya Petrova##Dental&Assistants25Health Ltd.",
    "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
    "George Fill####Orderlies99Health JSC",
    "Lily petrova#Speech&Pathology&Assistants60Health Ltd."])
