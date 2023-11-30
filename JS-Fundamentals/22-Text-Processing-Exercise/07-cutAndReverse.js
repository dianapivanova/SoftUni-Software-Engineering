function cutAndReverse(input) {
    let firstPart = input.slice(0, input.length / 2).split('').reverse().join('')
    let secondPart = input.slice(input.length / 2).split('').reverse().join('')

    console.log(firstPart)
    console.log(secondPart)


}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')