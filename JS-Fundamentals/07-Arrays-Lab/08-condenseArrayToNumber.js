function condenseArrayToNumber(arr) {

    while (arr.length > 1) {
        let condense = []; //resetting the condense so we can store the last operation; results from the previous one are saved under the num variable
        for (let i = 0; i < arr.length - 1; i++) {
            condense[i] = Number(arr[i] + arr[i + 1]);

        }
        arr = condense;
    }
    console.log(Number(arr));
}
condenseArrayToNumber([2, 10, 3])