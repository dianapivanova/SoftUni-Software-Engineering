function sumFirstLastNum(arr) {
    let firstnum = Number(arr.shift())
    let lastNum = Number(arr.pop())

    console.log(firstnum + lastNum)

}
sumFirstLastNum(['20', '30', '40'])