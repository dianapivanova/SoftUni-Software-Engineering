function distinctArray(arr) {
    let newArr = []

    for (let num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num)
        }
    }

    console.log(newArr.join(" "))

}
distinctArray([1, 2, 3, 4])