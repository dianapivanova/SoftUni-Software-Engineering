function sortArray(input, order) {

    function sortAsc(input) {
        return input = input.sort((a, b) => (a - b))
    }

    function sortDesc(input) {
        return input = input.sort((a, b) => (b - a))
    }


    if (order == 'asc') {
        return sortAsc(input)
    } else {
        return sortDesc(input)
    }

}
sortArray([14, 7, 17, 6, 8], 'asc')