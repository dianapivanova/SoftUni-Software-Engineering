function findEmails(text) {

    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g


    let match = text.match(pattern)

    console.log(match.join('\n'))

}
findEmails("Please contact us at: support@github.com.")