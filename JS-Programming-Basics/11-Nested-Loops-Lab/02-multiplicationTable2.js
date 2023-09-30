function multiplication(input) {

    let res = 0
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let res = i * j
            console.log(`${i} * ${j} = ${res}`)

        }
    }
}
multiplication()