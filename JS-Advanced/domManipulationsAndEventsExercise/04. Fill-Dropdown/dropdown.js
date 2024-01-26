function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const optionElement = document.createElement("option");
    optionElement.textContent = textInput.value;
    optionElement.value = valueInput.value;
    menu.appendChild(optionElement);

    textInput.value = '';
    valueInput.value = '';

}