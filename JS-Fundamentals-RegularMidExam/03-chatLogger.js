function chatLogger(array) {

    let currentEl = array.shift()

    while (currentEl !== "end") {
        let tokens = currentEl.split(' ')
        let command = tokens[0]
        let message = tokens[1]

        if (command == "Chat") {
            array.push(message)
        } else if (command == "Delete") {
            if (array.includes(message)) {
                let removedElIdx = array.indexOf(message)
                array.splice(removedElIdx, 1)
            } else {
                currentEl = array.shift();
                continue;
            }
        } else if (command == "Edit") {
            let editedMessage = tokens[2]
            if (array.includes(message)) {
                let adjustedMessage = array.indexOf(message)
                array.splice(adjustedMessage, 1, editedMessage)
            } else {
                currentEl = array.shift();
                continue;
            }
        } else if (command == "Pin") {
            if (array.includes(message)) {
                let pinnedMessageIdx = array.indexOf(message)
                array.splice(pinnedMessageIdx, 1)
                array.push(message)
            } else {
                currentEl = array.shift();
                continue;
            }
        } else if (command == "Spam") {
            for (let spamMessage = 1; spamMessage < tokens.length; spamMessage++) {
                array.push(tokens[spamMessage])
            }

        }

        currentEl = array.shift()
    }

    console.log(array.join('\n'))
}
chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])