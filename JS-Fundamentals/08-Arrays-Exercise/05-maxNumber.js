function maxNumber(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let firstNum = arr[i]
        let isTop = true

        for (let j = i + 1; j < arr.length; j++) {
            if (firstNum <= arr[j]) {
                isTop = false; break;
            }
        }

        if (isTop) {
            newArr.push(firstNum)
        }
    }


    console.log(newArr.join(' '))
}
maxNumber([41, 41, 34, 20])