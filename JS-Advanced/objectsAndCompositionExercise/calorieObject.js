function calorieObject(arr) {
    let res = {}

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i]
        let kcal = Number(arr[i + 1])
        res[product] = kcal

    }

    console.log(res)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])