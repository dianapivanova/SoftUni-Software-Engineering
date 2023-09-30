function sequence(input) {
    let counter = 1;
    let number = Number(input[0]);

    while (counter <= number) {
        console.log(counter)
        counter = counter * 2 + 1
    }
}
sequence()