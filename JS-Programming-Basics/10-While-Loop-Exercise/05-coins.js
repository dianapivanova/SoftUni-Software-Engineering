function coins(input) {
    let change = Number(input[0]);
    let changeCoins = Math.floor(change * 100)
    let coinsNumber = 0

    while (changeCoins > 0) {
        if (changeCoins >= 200) {
            changeCoins -= 200;
            coinsNumber++
        } else if (changeCoins >= 100) {
            changeCoins -= 100;
            coinsNumber++
        } else if (changeCoins >= 50) {
            changeCoins -= 50;
            coinsNumber++
        } else if (changeCoins >= 20) {
            changeCoins -= 20;
            coinsNumber++
        } else if (changeCoins >= 10) {
            changeCoins -= 10;
            coinsNumber++
        } else if (changeCoins >= 5) {
            changeCoins -= 5;
            coinsNumber++
        } else if (changeCoins >= 2) {
            changeCoins -= 2;
            coinsNumber++
        } else if (changeCoins >= 1) {
            changeCoins -= 1;
            coinsNumber++
        }

    }
    console.log(coinsNumber)
}
coins()