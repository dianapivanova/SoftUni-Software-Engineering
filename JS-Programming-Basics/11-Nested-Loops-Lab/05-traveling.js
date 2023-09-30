function travelling(input) {
    let destinationOrEnd = input[0];
    let budget = Number(input[1]);
    let savings = 0;
    let index = 1;

    while (destinationOrEnd !== "End") {
        index++;

        while (savings < budget) {
            savings += Number(input[index]);
            index++;
        }

        console.log(`Going to ${destinationOrEnd}!`);
        destinationOrEnd = input[index++];
        budget = Number(input[index]);
        savings = 0;
    }
}
travelling()