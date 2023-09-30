function toyShop(input) {

    let dolls = Number(input[2]);

    let puzzels = Number(input[1]);

    let bears = Number(input[3]);

    let minions = Number(input[4]);

    let trucks = Number(input[5]);

    let vacationPrice = Number(input[0]);



    let toysCount = puzzels + dolls + bears + minions + trucks;



    let totalPrice = 2.6 * puzzels + 3 * dolls + 4.1 * bears + 8.2 * minions + 2 * trucks;

    if (toysCount >= 50) {

        totalPrice = totalPrice * 0.75;



    }

    totalPrice = totalPrice * 0.9;

    if (totalPrice >= vacationPrice) {

        let moneyLeft = totalPrice - vacationPrice;

        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

    } else {

        let moneyNeeded = vacationPrice - totalPrice;

        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed. `);

    }
}
toyShop()

