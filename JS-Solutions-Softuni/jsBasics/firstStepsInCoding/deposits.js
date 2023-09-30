function deposits(input) {
    let deposit = Number(input[0])
    let time = Number(input[1])
    let annualIR = Number(input[2])
    let totalSum = deposit + time * ((deposit * annualIR / 100) / 12)
    // сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

    console.log(totalSum)
}

deposits(["200 ", " 3 ", "5.7 "])
deposits(["2350", " 6 ", " 7 "])