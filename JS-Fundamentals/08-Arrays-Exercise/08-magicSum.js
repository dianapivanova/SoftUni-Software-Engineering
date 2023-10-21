function magic(arr, b) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == b) {
                console.log(arr[i], arr[j])
            }
        }
    }
    console.log(newArr.join(' '))
}
magic([1, 7, 6, 2, 19, 23],
    8
)