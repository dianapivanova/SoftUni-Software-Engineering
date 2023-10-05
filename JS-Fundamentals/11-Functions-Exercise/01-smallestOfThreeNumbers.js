function smallestNumPrinter(numOne, numTwo, numThree) {
    let smallestNumber = numOne

    if (numTwo < numOne && numTwo < numThree) {
        smallestNumber = numTwo
    } else if (numThree < numTwo && numThree < numOne) {
        smallestNumber = numThree
    }

    console.log(smallestNumber)

}

smallestNumPrinter(0, 2, 0)