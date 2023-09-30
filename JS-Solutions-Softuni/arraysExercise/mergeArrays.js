function mergeArrays(arr1, arr2) {
    let mergedArray = []

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i]
        let el2 = arr2[i]

        if (i % 2 == 0) {
            mergedArray.push(Number(el1) + Number(el2))
        } else {
            mergedArray.push(el1 + el2)
        }

    }

    console.log(mergedArray.join(" - "))

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])
