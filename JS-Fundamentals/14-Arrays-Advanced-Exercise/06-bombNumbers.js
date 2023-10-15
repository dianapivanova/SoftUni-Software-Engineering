function bombNumbers(arr, bombAndPower) {
    let bombNum = bombAndPower[0]
    let power = bombAndPower[1]

    while (arr.includes(bombNum)) {
        let idx = arr.indexOf(bombNum)
        arr.splice(Math.max(0, idx - power), power * 2 + 1)
    }

    let sum = 0
    for (let num of arr) {
        sum += num
    }
    console.log(sum)
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)