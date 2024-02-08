function sortArray(input, order) {

    if (order == 'asc') {
        input = input.sort((a, b) => (a - b));
    } else {
        input = input.sort((a, b) => (b - a))
    }

    return input;
}
sortArray([14, 7, 17, 6, 8], 'asc')