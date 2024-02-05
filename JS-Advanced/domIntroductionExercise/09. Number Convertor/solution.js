function solve() {
    let number = document.getElementById('input')
    let outputField = document.getElementById('result')

    let selectMenuTo = document.getElementById('selectMenuTo')

    let binaryOption = document.createElement('option')
    binaryOption.value = 'binary'
    binaryOption.textContent = 'Binary'
    selectMenuTo.appendChild(binaryOption)

    let hexaOption = document.createElement('option')
    hexaOption.value = 'hexadecimal'
    hexaOption.textContent = 'Hexadecimal'
    selectMenuTo.appendChild(hexaOption)

    let buttonTarget = document.querySelector('button')
    buttonTarget.addEventListener('click', onConvert)

    function onConvert() {
        if (selectMenuTo.value == 'binary') {
            outputField.value = Number(number.value).toString(2)
        } else if (selectMenuTo.value == 'hexadecimal') {
            outputField.value = Number(number.value).toString(16).toUpperCase()
        }
    }
}