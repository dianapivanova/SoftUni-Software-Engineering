function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor > 0; floor--) {
        let buff = ""
        for (let room = 0; room < y; room++) {
            let ch = ''
            if (floor === x) {
                ch = "L"
            } else if (floor % 2 !== 0) {
                ch = "A";
            } else {
                ch = "O"
            }
            buff += `${ch}${floor}${room} `
        }
        console.log(buff)
    }
}
building()