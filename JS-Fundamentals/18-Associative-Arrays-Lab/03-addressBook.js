function addressBook(array) {
    let addressBookObj = {}

    for (let row of array) {
        [personName, address] = row.split(':')
        addressBookObj[personName] = address
    }

    let entries = Object.entries(addressBookObj).sort((a, b) => (a[0].localeCompare(b[0])))

    for (let entry of entries) {
        console.log(entry.join(' -> '))
    }


}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])