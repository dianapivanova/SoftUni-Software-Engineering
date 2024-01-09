function encrypter(array) {
    let inputCount = Number(array.shift())
    let pattern = /(\*|@)(?<encrypt>[A-Z][a-z]{2,})\1\: \[(?<enc1>[A-Za-z])\]\|\[(?<enc2>[A-Za-z])\]\|\[(?<enc3>[A-Za-z])]\|$/

    for (let row of array) {
        let matches = row.match(pattern)

        if (matches) {
            let { encrypt, enc1, enc2, enc3 } = matches.groups
            enc1 = enc1.charCodeAt()
            enc2 = enc2.charCodeAt()
            enc3 = enc3.charCodeAt()
            console.log(`${encrypt}: ${enc1} ${enc2} ${enc3}`)
        } else {
            console.log('Valid message not found!')
        }
    }
}
encrypter(["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|"])
