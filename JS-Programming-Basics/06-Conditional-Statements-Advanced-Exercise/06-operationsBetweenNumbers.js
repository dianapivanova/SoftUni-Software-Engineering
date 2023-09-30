function operationsBetweenNumbers(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operand = input.shift();

    let result = 0.0;
    let oddOrEven = "";
    switch (operand) {
        case "+":
            result = num1 + num2;
            if (result % 2 == 0) {
                oddOrEven = "even";
            }
            else {
                oddOrEven = "odd";
            }
            console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 == 0) {
                oddOrEven = "even";

            }
            else {
                oddOrEven = "odd";
            }
            console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 == 0) {
                oddOrEven = "even";

            }
            else {
                oddOrEven = "odd";
            }
            console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
            break;
        case "/":
            result = num1 / num2;
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
                break;
            }
            else {
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            result = num1 % num2;
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
                break;
            }
            else {
                console.log(`${num1} % ${num2} = ${result}`);
            }
            break;
    }

}
operationsBetweenNumbers()