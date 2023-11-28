function employees(array) {
    let namesObj = {}

    for (let i = 0; i < array.length; i++) {
        let name = array[i]
        let personalNum = name.length
        let namesObj = { name, personalNum }

        console.log(`Name: ${namesObj.name} -- Personal Number: ${personalNum}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])