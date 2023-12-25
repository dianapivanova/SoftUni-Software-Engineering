function vacation3(group, type, day) {

    let information =
    {
        'Friday': { 'Students': 8.45, 'Business': 10.90, 'Regular': 15 },
        'Saturday': { 'Students': 9.80, 'Business': 15.60, 'Regular': 20 },
        'Sunday': { 'Students': 10.46, 'Business': 16, 'Regular': 22.50 }
    }

    let totalPrice = information[day][type] * group

    if (type == 'Students' && group >= 30) {
        totalPrice *= 0.85
    } else if (type == 'Business' && group >= 100) {
        totalPrice = information[day][type] * (group - 10)
    } else if (type == 'Regular' && group >= 10 && group <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation3(30,
    "Students",
    "Sunday")