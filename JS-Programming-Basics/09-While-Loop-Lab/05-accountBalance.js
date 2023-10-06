function accountBalance(input) {
    let index = 0
    let account = 0

    let command = input[index]
    index++

    while (command !== "NoMoreMoney") {
        let money = Number(command)

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }

        account = account + money
        console.log("Increase: " + money.toFixed(2))

        command = input[index];
        index++

    }

    console.log("Total: " + account.toFixed(2))

}
accountBalance()