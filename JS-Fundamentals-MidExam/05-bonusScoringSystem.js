function bonusSystem(arr) {
    let studentNum = Number(arr.shift())
    let lecturesNum = Number(arr.shift())
    let additionalBonus = Number(arr.shift())
    let highestResult = 0
    let lookedAttendances = 0

    for (let i = 0; i < studentNum; i++) {
        let attendances = arr[i]
        let totalBonus = attendances / lecturesNum * (5 + additionalBonus)

        if (totalBonus >= highestResult) {
            highestResult = totalBonus
            lookedAttendances = attendances
        }

    }

    console.log(`Max Bonus: ${Math.ceil(highestResult)}.`)
    console.log(`The student has attended ${lookedAttendances} lectures.`)

}
bonusSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'])