function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1])
    let newArray = []

    for (let i = 0; i < arr.length - 1; i++) {
        newArray.push(arr[i])
    }

    for (let i = 1; i <= rotations; i++) {
        let el = newArray.pop()
        newArray.unshift(el)
    }

    console.log(newArray.join(" "))

}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']) // 3 4 1 2