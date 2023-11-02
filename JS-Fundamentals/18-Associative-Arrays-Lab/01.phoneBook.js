function phoneBook(array) {
    let phoneBookObj = {}

    for (let row of array) {
        [personName, phone] = row.split(' ')
        phoneBookObj[personName] = phone
    }

    for (let [personName, phone] of Object.entries(phoneBookObj)) {
        console.log(`${personName} -> ${phone}`)
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)