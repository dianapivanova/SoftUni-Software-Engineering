function companyUsers(arr) {

    let resultObj = {}

    for (let row of arr) {
        let [company, id] = row.split(' -> ')

        if (company in resultObj) {
            if (!resultObj[company].includes(id)) {
                resultObj[company].push(id)
            }
        } else {
            resultObj[company] = [id]
        }
    }

    let resultArr = Object.entries(resultObj).sort((a, b) => a[0].localeCompare(b[0]))

    for (let company of resultArr) {
        console.log(company[0])
        for (let id of company[1]) {
            console.log(`-- ${id}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)