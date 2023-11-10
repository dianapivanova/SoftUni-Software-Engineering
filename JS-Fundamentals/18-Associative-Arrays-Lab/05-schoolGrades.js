function schoolGrades(data) {

    let obj = {}
    for (let row of data) {
        let tokens = row.split(' ')
        let name = tokens.shift()
        let gradeArr = tokens

        if (!obj.hasOwnProperty(name)) {
            obj[name] = gradeArr
        } else {
            obj[name].push(...gradeArr)
        }

    }


    for (let [name, gradeArr] of Object.entries(obj).sort((a, b) => (a[0].localeCompare(b[0])))) {
        let totalGrade = 0
        let avgGrade = 0

        for (let grade of gradeArr) {
            totalGrade += Number(grade)
        }
        avgGrade = totalGrade / gradeArr.length

        console.log(`${name}: ${avgGrade.toFixed(2)}`)
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)