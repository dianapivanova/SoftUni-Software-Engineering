function bitcoinMining(array) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let totalSum = 0;
    let day = 0;
    let firstDay = 0
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let sumBitcoins = 0;


    for (let index = 0; index < array.length; index++) {
        day++;
        let dayGrams = array[index];
        if (day % 3 == 0) {
            dayGrams *= 0.7
        }
        let singleDayEarning = dayGrams * gold;
        totalSum += singleDayEarning;


        if (totalSum >= bitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bitcoin * boughtBitcoin);
            sumBitcoins += boughtBitcoin;
        }
        if (countBitcoin == 1) {
            firstDay = day;
        }
    }

    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300])