function wordDeveloping(array) {
    let str = ''

    let command = array.shift()

    while (command !== 'End') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Print') {
            console.log(str)
        } else if (action == 'Upgrade') {
            let char = tokens[1]
            let asciiValue = char.charCodeAt(0) + 1
            let newChar = String.fromCharCode(asciiValue)
            str = str.split(char).join(newChar)
        } else if (action == 'Remove') {
            let substr = tokens[1]
            str = str.split(substr).join('')
        } else if (action == 'Index') {
            let char = tokens[1]

            if (str.includes(char)) {
                let arr = []

                for (let i = 0; i < str.length; i++) {
                    if (str[i] == char) {
                        arr.push(i)
                    }
                }
                console.log(arr.join(' '))
            } else {
                console.log('None')
            }
        } else if (action == 'Add') {
            let substr = tokens[1]
            str = str + substr
        }

        command = array.shift()
    }
}
wordDeveloping(["Add University",
    "Print",
    "Upgrade n",
    "Print",
    "Index i",
    "Remove sity",
    "Print",
    "End"])
