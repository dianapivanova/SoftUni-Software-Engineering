function wallBuilding(sections) {
    sections.map(Number)
    let dailyConcrete = 0
    let concreteArray = []
    let totalConcrete = 0

    while (true) {
        let IsBuilt = false
        totalConcrete = 0
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== 30) { // if this check is invalid, isbuilt is still false so it's breaking the cycle
                sections[i]++
                dailyConcrete = 195
                totalConcrete += dailyConcrete
                IsBuilt = true
            }
        }

        if (IsBuilt) {
            concreteArray.push(totalConcrete)
        } else {
            IsBuilt = false
            break;
        }

    }

    let total = 0

    for (let j = 0; j < concreteArray.length; j++) {
        total += Number(concreteArray[j])
    }

    let totalExpenses = total * 1900
    console.log(concreteArray.join(', '))
    console.log(`${totalExpenses} pesos`)
}
wallBuilding([21, 25, 28])