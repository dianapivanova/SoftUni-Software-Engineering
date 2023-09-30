function graduation(input) {
    let index = 0
    let name = input[index];
    index++

    let sumGrade = 0
    let i = 1

    let badGradesCount = 0
    let hasExcluded = false

    while (i <= 12) {
        let grade = Number(input[index]);
        index++

        if (grade < 4.00) {
            badGradesCount++
            if (badGradesCount === 2) {
                console.log(`${name} has been excluded at ${i} grade`)
                hasExcluded = true
                break;
            }
            continue;
        }
        sumGrade += grade
        i++
    }

    if (!hasExcluded) {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
    }
}
graduation()