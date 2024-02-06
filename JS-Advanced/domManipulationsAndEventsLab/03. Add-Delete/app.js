function addItem() {
    let outputField = document.getElementById('newItemText');
    let ulRef = document.getElementById('items')

    if (outputField.value !== '') {
        let newEl = document.createElement('li')
        newEl.textContent = outputField.value
        ulRef.appendChild(newEl)

        outputField.value = ''

        let newAElement = document.createElement('a')
        newAElement.textContent = '[Delete]'
        newAElement.href = '#';
        newEl.appendChild(newAElement)
        newAElement.addEventListener('click', onClick)

        function onClick(e) {
            e.target.parentElement.remove()
        }
    }
}