function netherRealms(input) {
    let array = input.split(/[, ]+/g);
    let healthPattern =
        /[^0-9.\/+*-]/g;
    let damagePatern = /[+-]?\d+\.?\d*/g;
    let divideOrMultiply = /(?<multiply>[*])|(?<divide>[\/])/g;
    let resultHealth = 0
    let resultDamage = 0
    let object = {};
    for (let string of array) {
        object[string] = {}
        let health = [...string.matchAll(healthPattern)]
        let damage = [...string.matchAll(damagePatern)]
        let divideOrMultiplies = [...string.matchAll(divideOrMultiply)]
        for (let i = 0; i < health.length; i++) {
            let text = health[i][0]
            let textAsCodeAscii = text.charCodeAt()
            resultHealth += textAsCodeAscii
        }
        object[string]['health'] = resultHealth
        resultHealth = 0;
        for (let x = 0; x < damage.length; x++) {
            let number = Number(damage[x][0])
            resultDamage += number
        }
        for (let el of divideOrMultiplies) {
            if (el.groups.multiply === '*') {
                resultDamage *= 2
            } else if (el.groups.divide === '/') {
                resultDamage /= 2
            }
        }
        object[string]['damage'] = resultDamage;
        resultDamage = 0;

    }

    let arrNewMap = Object.entries(object).sort((a, b) => (a[0]).localeCompare(b[0]))

    for (let [name, arrays] of arrNewMap) {
        console.log(`${name} - ${arrays['health']} health, ${arrays['damage'].toFixed(2)} damage`)
    }
}
netherRealms('M3ph1st0**, Azazel')