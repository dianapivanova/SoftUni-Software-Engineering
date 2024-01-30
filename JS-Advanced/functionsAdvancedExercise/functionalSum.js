function add(num) {
    let sum = 0
    sum += num

    function addAnotherNum(anotherNum) {
        sum += anotherNum;
        return addAnotherNum;
    }

    addAnotherNum.toString = () => sum;
    return addAnotherNum;
}
add(1)(6)(-3)