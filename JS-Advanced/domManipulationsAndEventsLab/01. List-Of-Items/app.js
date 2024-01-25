function addItem() {
    let newText = document.getElementById("newItemText");
    let appendTo = document.getElementById("items");

    if (newText.value !== "") {
        let newElement = document.createElement('li');
        newElement.textContent = newText.value;
        appendTo.appendChild(newElement);
        newText.value = '';
    }
}