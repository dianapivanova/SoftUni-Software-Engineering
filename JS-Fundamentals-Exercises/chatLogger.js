function chatLogger(array) {

    let command = array.shift()
    let chat = []

    while (command !== 'end') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Chat') {
            let message = tokens[1]
            chat.push(message)
        } else if (action == 'Edit') {
            let message = tokens[1]
            let edited = tokens[2]
            if (chat.includes(message)) {
                let idx = chat.indexOf(message)
                chat.splice(idx, 1, edited)
            }
        } else if (action == 'Spam') {
            let spamMessages = tokens.slice(1)
            for (let spam of spamMessages) {
                chat.push(spam)
            }
        } else if (action == 'Delete') {
            let message = tokens[1]
            if (chat.includes(message)) {
                let idx = chat.indexOf(message)
                chat.splice(idx, 1)
            }
        } else if (action == 'Pin') {
            let message = tokens[1]
            if (chat.includes(message)) {
                let idx = chat.indexOf(message)
                chat.splice(idx, 1)
                chat.push(message)
            }
        }

        command = array.shift()
    }

    console.log(chat.join('\n'))
}
chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"])