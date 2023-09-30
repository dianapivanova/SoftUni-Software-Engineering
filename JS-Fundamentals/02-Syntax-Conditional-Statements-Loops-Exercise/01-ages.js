function ages(age) {
    let result = ''
    if (age < 0) {
        result = 'out of bounds'
    } else if (age <= 2) {
        result = 'baby'
    } else if (age <= 13) {
        result = 'child'
    } else if (age <= 19) {
        result = 'teenager'
    } else if (age <= 65) {
        result = 'adult'
    } else if (age >= 66) {
        result = 'elder'
    }
    console.log(result)
}
ages()