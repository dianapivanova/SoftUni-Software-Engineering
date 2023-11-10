function cutAndReverse(input) {
    let firstPart = input.substring(0, input.length / 2)
    let secondPart = input.substring(input.length / 2, input.length)

    let firstRes = firstPart.split('').reverse().join('')
    let secondRes = secondPart.split('').reverse().join('')

    console.log(firstRes)
    console.log(secondRes)

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')