function solution(num) {

    function addNum(newNum) {
        return num + newNum
    }

    return addNum

}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
