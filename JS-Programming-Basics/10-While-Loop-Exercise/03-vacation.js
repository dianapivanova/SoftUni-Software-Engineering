function vacation(input) {
    let neededMoney = Number(input[0])
    let availableMoney = Number(input[1]);
    let days = 0
    let spendDays = 0
    let index = 2
    let currentRow = input[index]

    while (availableMoney <= neededMoney) {

        days++
        index++

        if (currentRow === "spend") {
            let moneyToSpend = Number(input[index]);
            spendDays++
            availableMoney -= moneyToSpend

            if (availableMoney < 0) {
                availableMoney = 0
            }

            if (spendDays >= 5) {
                console.log("You can't save the money.")
                console.log(days);
                break;
            }
        } else if (currentRow === "save") {
            let moneyToSave = Number(input[index])
            spendDays = 0
            availableMoney += moneyToSave

            if (availableMoney >= neededMoney) {
                console.log(`You saved the money for ${days} days.`); break;
            }
        }

        index++
        currentRow = input[index]

    }

}
vacation()