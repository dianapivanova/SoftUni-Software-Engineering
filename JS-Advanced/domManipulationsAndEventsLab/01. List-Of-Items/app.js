function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newEl = document.createElement('li')
    newEl.textContent = newText

    if (newEl.textContent == '') {
        return;
    }

    let attachedTo = document.getElementById('items')
    attachedTo.appendChild(newEl)
}