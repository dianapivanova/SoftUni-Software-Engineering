function registration(array) {
    let rows = Number(array.shift())
    let registations = 0

    let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P\@\$(?<password>[A-Za-z]{5,}\d+)P\@\$/

    for (let row of array) {

        let matches = row.match(pattern)

        if (matches) {
            let { username, password } = matches.groups
            registations++
            console.log('Registration was successful')
            console.log(`Username: ${username}, Password: ${password}`)
        } else {
            console.log('Invalid username or password')
        }
    }

    console.log(`Successful registrations: ${registations}`)
}
registration(["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"])
