function fruitShop([arg1, arg2, arg3]) {

    let fruit = arg1;

    let dayOfWeek = arg2;

    let quantity = Number(arg3);

    if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {

        if (fruit == "banana") {

            console.log((quantity * 2.5).toFixed(2));

        } else if (fruit == "apple") {

            console.log((quantity * 1.20).toFixed(2));

        } else if (fruit == "orange") {

            console.log((quantity * 0.85).toFixed(2));

        } else if (fruit == "grapefruit") {

            console.log((quantity * 1.45).toFixed(2));

        } else if (fruit == "kiwi") {

            console.log((quantity * 2.70).toFixed(2));

        } else if (fruit == "pineapple") {

            console.log((quantity * 5.5).toFixed(2));

        } else if (fruit == "grapes") {

            console.log((quantity * 3.85).toFixed(2));

        } else { //here
            console.log("error");
            return;
        }

    } else if (dayOfWeek == "Sunday" || dayOfWeek == "Saturday") {

        if (fruit == "banana") {

            console.log((quantity * 2.7).toFixed(2));

        } else if (fruit == "apple") {

            console.log((quantity * 1.25).toFixed(2));

        } else if (fruit == "orange") {

            console.log((quantity * 0.90).toFixed(2));

        } else if (fruit == "grapefruit") {

            console.log((quantity * 1.60).toFixed(2));

        } else if (fruit == "kiwi") {

            console.log((quantity * 3).toFixed(2));

        } else if (fruit == "pineapple") {

            console.log((quantity * 5.60).toFixed(2));

        } else if (fruit == "grapes") {

            console.log((quantity * 4.20).toFixed(2));

        } else { //here
            console.log("error");
            return;
        }

    } else {
        console.log("error");
        return;

    }

}
fruitShop()