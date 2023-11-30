function companyUsers(arr) {

    let companies = {}

    for (let employee of arr) {
        let tokens = employee.split(' -> ')
        let company = tokens[0]
        let employeeId = tokens[1]

        if (company in companies) {
            if (!companies[company].includes(employeeId)) {
                companies[company].push(employeeId)
            }
        } else {
            companies[company] = [employeeId]
        }
    }

    let sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))

    for (let entries of sortedCompanies) {
        console.log(entries[0])
        for (let id of entries[1])
            console.log(`-- ${id}`)
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)