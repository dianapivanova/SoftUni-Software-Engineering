function employees(array) {

    for (let name of array) {
        let employee = { name: name, personalNumber: name.length }
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])