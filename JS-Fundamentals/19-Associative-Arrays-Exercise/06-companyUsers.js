function companyUsers(arr) {

    let companiesObj = {}

    for (let entries of arr) {
        let [company, id] = entries.split(' -> ')

        if (!companiesObj.hasOwnProperty(company)) {
            companiesObj[company] = [id]
        } else {
            if (!companiesObj[company].includes(id)) {
                companiesObj[company].push(id)
            }
        }
    }


    for (let [company, ids] of Object.entries(companiesObj).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(company)

        ids.map(x => console.log(`-- ${x}`))
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)