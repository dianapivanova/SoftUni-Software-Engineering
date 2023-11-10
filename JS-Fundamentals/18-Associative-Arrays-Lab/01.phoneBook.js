function phoneBook(array) {
    let phoneBook = {}

    for (let entries of array) {
        let [name, phone] = entries.split(' ')

        phoneBook[name] = phone
    }

    for (let entries of Object.entries(phoneBook)) {
        console.log(`${entries[0]} -> ${entries[1]}`)
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)