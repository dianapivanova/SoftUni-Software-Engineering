function legendaryFarming(string) {

    let helpObj = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' }
    let keyObj = { shards: 0, fragments: 0, motes: 0 }
    let junkObj = {}
    let legendary = ''

    let materialsArr = string.split(" ")

    for (let i = 0; i < materialsArr.length; i += 2) {
        let qty = Number(materialsArr[i])
        let material = materialsArr[i + 1].toLowerCase()

        if (material in keyObj) {
            keyObj[material] += qty

            if (keyObj[material] >= 250) {
                keyObj[material] -= 250
                legendary = helpObj[material]; break;
            }
        } else {
            if (material in junkObj) {
                junkObj[material] += qty
            } else {
                junkObj[material] = qty
            }
        }

    }

    console.log(`${legendary} obtained!`)

    let resultKeys = Object.entries(keyObj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    for (let entries of resultKeys) {
        console.log(`${entries[0]}: ${entries[1]} `)
    }

    let junkKeys = Object.entries(junkObj).sort((a, b) => (a[0].localeCompare(b[0])))
    for (let junkKey of junkKeys) {
        console.log(`${junkKey[0]}: ${junkKey[1]}`)
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')