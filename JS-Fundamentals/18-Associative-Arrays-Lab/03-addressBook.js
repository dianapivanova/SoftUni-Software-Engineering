function addressBook(array) {
    let addressBook = {}

    for (let entries of array) {
        let [name, address] = entries.split(':')

        addressBook[name] = address
    }


    for (let entries of Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${entries[0]} -> ${entries[1]}`)
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])