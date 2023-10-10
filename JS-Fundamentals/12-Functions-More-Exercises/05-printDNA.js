function dnaPrint(number) {

    let str = 'ATCGTTAGGG'
    let counter = 0

    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`)
        } else if (i % 4 == 1) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`)
        } else if (i % 4 == 2) {
            console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`)
        } else {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`)
        }

        counter += 2
    }
}
dnaPrint(4)

