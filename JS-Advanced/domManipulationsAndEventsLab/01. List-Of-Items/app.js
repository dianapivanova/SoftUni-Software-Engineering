function addItem() {
    let outputField = document.getElementById('newItemText');
    let ulRef = document.getElementById('items')

    if (outputField.value !== '') {
        let newEl = document.createElement('li')
        newEl.textContent = outputField.value
        ulRef.appendChild(newEl)

        outputField.value = ''
    }
}