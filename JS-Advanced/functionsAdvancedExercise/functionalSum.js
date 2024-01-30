function add(num) {
    let sum = 0
    sum += num

    function addAnotherNum(anotherNum) {
        sum += anotherNum;
        return addAnotherNum;
    }

    addAnotherNum.toString = () => sum;
    return addAnotherNum; //because of the above this now returns the sum variable
}
add(1)(6)(-3)