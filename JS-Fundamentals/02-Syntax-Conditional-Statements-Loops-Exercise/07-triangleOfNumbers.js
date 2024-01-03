function triangle(num) {
    for (let i = 1; i <= num; i++) {
        let res = `${i} `.repeat(i)
        console.log(res)
    }

}
triangle(6)