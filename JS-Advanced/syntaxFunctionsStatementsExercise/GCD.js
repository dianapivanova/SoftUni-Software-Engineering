function GCD(num1, num2) {

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }


    console.log(num1)
}
GCD(20, 15)