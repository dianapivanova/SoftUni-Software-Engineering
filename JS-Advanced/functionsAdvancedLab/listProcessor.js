function listProcessor(commands) {

    let collection = [];

    let obj = {
        add: (str) => collection.push(str),
        remove: (str) => collection = collection.filter(x => x !== str),
        print: () => console.log(collection.join(','))
    }

    for (let command of commands) {
        if (command == 'print') {
            obj.print()
        } else {
            let [action, str] = command.split(' ')
            if (action == 'add') {
                obj.add(str)
            } else {
                obj.remove(str)
            }
        }
    }

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])