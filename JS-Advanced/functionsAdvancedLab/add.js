function solution(num1) {

    function add5(num2) {
        return num1 + num2
    }

    return add5
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(7));
