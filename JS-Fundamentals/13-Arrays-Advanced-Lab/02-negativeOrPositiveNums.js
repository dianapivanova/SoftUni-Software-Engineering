function sortNegativePositiveNums(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) < 0) {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }

    }

    console.log(result.join("\n"))
}


sortNegativePositiveNums(['7', '-2', '8', '9'])