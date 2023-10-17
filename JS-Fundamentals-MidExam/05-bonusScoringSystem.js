function bonusSystem(arr) {
    let students = Number(arr.shift())
    let lecturesNum = Number(arr.shift())
    let addBonus = Number(arr.shift())
    let highestResult = 0
    let maxStudentLectures = 0

    for (let i = 0; i < arr.length; i++) {
        let attendance = Number(arr[i])
        let totalBonus = attendance / lecturesNum * (5 + addBonus)

        if (totalBonus >= highestResult) {
            highestResult = totalBonus
            maxStudentLectures = attendance
        }
    }

    console.log(`Max Bonus: ${Math.ceil(highestResult)}.`)
    console.log(`The student has attended ${Math.ceil(maxStudentLectures)} lectures.`)
}
bonusSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
)