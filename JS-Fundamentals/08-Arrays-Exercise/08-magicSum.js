function magic(arr, b) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let newArr = []
            if (Number(arr[i]) + Number(arr[j]) == Number(b)) {
                newArr.push(arr[i], arr[j])
                console.log(newArr.join(' '));
            }
        }
    }
}
magic([1, 2, 3, 4, 5, 6],
    6
)