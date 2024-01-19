function postfixCalculator(instructions) {
    let operands = [];

    const arithmeticOperations = {
        '+': (operand1, operand2) => operand1 + operand2,
        '-': (operand1, operand2) => operand1 - operand2,
        '*': (operand1, operand2) => operand1 * operand2,
        '/': (operand1, operand2) => operand1 / operand2,
    };

    for (let instruction of instructions) {
        if (typeof instruction === 'number') {
            operands.push(instruction);
        } else if (typeof instruction === 'string') {
            if (operands.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            let operand2 = operands.pop();
            let operand1 = operands.pop();

            operands.push(arithmeticOperations[instruction](operand1, operand2));

        }
    }

    if (operands.length === 1) {
        console.log(operands[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

janSNotation([3,
    4,
    '+'])
