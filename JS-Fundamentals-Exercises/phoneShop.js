function phoneShop(array) {
    let phones = array.shift().split(', ')

    let command = array.shift()

    while (command !== 'End') {
        let tokens = command.split(' - ')
        let action = tokens[0]

        if (action == 'Add') {
            let phone = tokens[1]
            if (!phones.includes(phone)) {
                phones.push(phone)
            }
        } else if (action == 'Remove') {
            let phone = tokens[1]
            if (phones.includes(phone)) {
                let idx = phones.indexOf(phone)
                phones.splice(idx, 1)
            }
        } else if (action == 'Bonus phone') {
            let [oldPhone, newPhone] = tokens[1].split(':')
            if (phones.includes(oldPhone)) {
                let idx = phones.indexOf(oldPhone)
                phones.splice(idx + 1, 0, newPhone)
            }
        } else if (action == 'Last') {
            let phone = tokens[1]
            if (phones.includes(phone)) {
                let idx = phones.indexOf(phone)
                phones.splice(idx, 1)
                phones.push(phone)
            }
        }

        command = array.shift()
    }

    console.log(phones.join(', '))
}
phoneShop(["HuaweiP20, XiaomiNote",

    "Remove - Samsung",

    "Bonus phone - XiaomiNote:Iphone5",

    "End"])