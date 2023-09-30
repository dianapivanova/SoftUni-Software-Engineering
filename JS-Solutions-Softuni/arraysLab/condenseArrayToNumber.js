function condenseArrayToNumber(arr) {
    let num = [];

    // transforming the array strings into numbers
    for (let i = 0; i < arr.length; i++) {
        num[i] = Number(arr[i]);
    }

    // adding the numbers to the condense string
    // with every cycle, numbers are being summed
    // adding the condense result to the num variable
    // the cycle is making one less rotation because we're already taking the last number in the condense variable

    while (num.length > 1) {
        let condense = [];
        for (let i = 0; i < num.length - 1; i++) {
            condense[i] = Number(num[i] + num[i + 1]);

        }
        num = condense;
    }
    console.log(Number(num));
}

condenseArrayToNumber([2, 10, 3])