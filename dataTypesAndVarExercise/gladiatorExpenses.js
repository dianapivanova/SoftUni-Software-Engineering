function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let swordBroken = 0
    let helmetBroken = 0
    let shieldBroken = 0
    let armorBroken = 0
    let armorCounter = 0

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetBroken++
        }
        if (i % 3 == 0) {
            swordBroken++
        }
        if (i % 2 == 0 && i % 3 == 0) {
            shieldBroken++
        }
        if (shieldBroken % 2 == 0 && shieldBroken > 1 && i % 2 == 0 && i % 3 == 0) {
            armorBroken++
        }
    }

    let totalExpenses = helmetBroken * helmetPrice + swordBroken * swordPrice + shieldBroken * shieldPrice + armorBroken * armorPrice
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)


}
gladiatorExpenses(23, 12.50, 21.50, 40, 200
)