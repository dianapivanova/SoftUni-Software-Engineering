function solution(num1) {

    function asd(num2) {
        return num1 + num2
    }

    return asd
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(7));
