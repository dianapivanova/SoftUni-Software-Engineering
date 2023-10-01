function rotation(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let el = arr.shift()
        arr.push(el)

    }

    console.log(arr.join(' '))

}
rotation([51, 47, 32, 61, 21], 2)