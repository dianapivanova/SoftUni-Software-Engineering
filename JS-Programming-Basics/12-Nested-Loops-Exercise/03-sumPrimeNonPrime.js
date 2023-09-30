function sumPrimeNonPrime(input) {

    let index = 0
    let sumPrimeNumber = 0
    let sumNonPrimeNumber = 0

    let command = input[index]
    index++

    while (command !== "stop") {

        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if (num == 1) {
            sumPrimeNumber += num;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrimeNumber += num
        } else {
            sumNonPrimeNumber += num;
        }

        command = input[index];
        index++
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`)
}
sumPrimeNonPrime()