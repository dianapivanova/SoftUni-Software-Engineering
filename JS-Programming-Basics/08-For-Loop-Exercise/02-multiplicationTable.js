function multiplication(input) {

    let n = Number(input[0]);
    let total = 0

    for (let i = 1; i <= 10; i++) {
        let total = n * i
        console.log(`${i} * ${n} = ${total}`)
    }
}
multiplication()