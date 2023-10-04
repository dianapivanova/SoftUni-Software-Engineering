function repeatString(str, repeatNum) {
    let res = ''
    for (let i = 0; i < repeatNum; i++) {
        res += str
    }
    return res

}
console.log(repeatString("abc", 3))