function getNextNum() {
    let previousNum = 0;
    let currentNum = 1;

    function getFi() {
        let newNum = previousNum + currentNum
        previousNum = currentNum
        currentNum = newNum

        return previousNum
    }

    return getFi
}

let fib = getNextNum();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
