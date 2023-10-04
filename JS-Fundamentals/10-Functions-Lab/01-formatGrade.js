function gradeFormatting(grade) {
    let result = ""
    if (grade < 3.00) {
        result = "Fail (2)"
    } else if (grade >= 3.00 && grade < 3.50) {
        result = "Poor"
    } else if (grade >= 3.50 && grade < 4.50) {
        result = "Good"
    } else if (grade >= 4.50 && grade < 5.50) {
        result = "Very good"
    } else if (grade >= 5.50) {
        result = "Excellent"
    }

    if (grade > 3 && grade < 6.00) {
        console.log(`${result} (${grade.toFixed(2)})`)
    } else {
        console.log(result)
    }
}
gradeFormatting(5.33)