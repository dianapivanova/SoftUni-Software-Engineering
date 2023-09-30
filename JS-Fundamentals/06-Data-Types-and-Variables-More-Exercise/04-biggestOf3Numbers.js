function numbers(num1, num2, num3) {

    let firstPosition, secondPosition, thirdPosition;

    if (num1 >= num2 && num1 >= num3) {
        firstPosition = num1;
        if (num2 >= num3) {
            secondPosition = num2;
            thirdPosition = num3;
        } else {
            secondPosition = num3;
            thirdPosition = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        firstPosition = num2;
        if (num1 >= num3) {
            secondPosition = num1;
            thirdPosition = num3;
        } else {
            secondPosition = num3;
            thirdPosition = num1;
        }
    } else {
        firstPosition = num3;
        if (num1 >= num2) {
            secondPosition = num1;
            thirdPosition = num2;
        } else {
            secondPosition = num2;
            thirdPosition = num1;
        }
    }

    console.log(firstPosition);

}
numbers()