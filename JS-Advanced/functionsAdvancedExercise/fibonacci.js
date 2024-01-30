function getNextNum() {
    let prevNum = 0;
    let currentNum = 1;


    function createNextNum() {
        let newNum = prevNum + currentNum
        prevNum = currentNum;
        currentNum = newNum;
        return prevNum
    }

    return createNextNum
}

let fib = getNextNum();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
