function schoolGrades(array) {
    let gradeObj = {}

    for (let tokens of array) {
        let tokensArr = tokens.split(' ')
        let name = tokensArr[0]

        let totalGrade = 0
        let count = 0

        if (tokensArr.length > 1) {
            for (let i = 1; i < tokensArr.length; i++) {
                let grade = Number(tokensArr[i])
                totalGrade += grade
                count++
            }

            totalGrade = totalGrade / count; // Calculate the average after the loop
        } else {
            totalGrade = 0; // Set totalGrade to 0 if there are no grades
        }

        if (gradeObj[name]) {
            gradeObj[name] = (totalGrade + gradeObj[name]) / 2; // Update the average correctly
        } else {
            gradeObj[name] = totalGrade;
        }
    }

    let sortedArr = Object.entries(gradeObj).sort((a, b) => (a[0].localeCompare(b[0])))

    for (let kvp of sortedArr) {
        let name = kvp[0]
        let grade = Number(kvp[1]).toFixed(2)
        console.log(`${name}: ${grade}`)
    }
}
schoolGrades(['Lilly', 'Josh 5 3 3 3', 'Josh 3 3 3 3', 'Josh 3 3 3 3']
)