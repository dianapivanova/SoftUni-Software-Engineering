function listProcessor(commands) {

    let result = []

    let objCommands = {
        add: (string) => result.push(string),
        remove: (string) => result = result.filter(x => x !== string),
        print: () => console.log(result.join(','))
    }


    for (let row of commands) {
        let [command, receivedString] = row.split(' ');
        if (command !== 'print') {
            objCommands[command](receivedString)
        } else {
            objCommands[command]()
        }
    }

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])