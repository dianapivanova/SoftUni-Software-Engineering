function addItem() {
    let menuRef = document.getElementById('menu');
    let textAreaRef = document.getElementById('newItemText');
    let valueAreaRef = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = textAreaRef.value;
    newOption.value = valueAreaRef.value;
    menuRef.appendChild(newOption);

    textAreaRef.value = '';
    valueAreaRef.value = '';

}