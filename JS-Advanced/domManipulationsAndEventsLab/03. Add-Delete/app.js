function addItem() {
    let newText = document.getElementById("newItemText");
    let appendTo = document.getElementById("items");

    if (newText.value !== "") {
        let newElement = document.createElement('li');
        newElement.textContent = newText.value;

        const deleteBtn = document.createElement('a')
        deleteBtn.textContent = '[Delete]'
        deleteBtn.href = '#' //a tag with no href will be disabled and the client won't be able to click;
        //we are using # as a link in order not to use the link as a navigation (not to redirect)
        newElement.appendChild(deleteBtn);
        deleteBtn.onclick = onDelete
        // deleteBtn.addEventListener('click', onDelete)

        appendTo.appendChild(newElement);
        newText.value = '';

        function onDelete(event) {
            const deletedElement = event.target.parentElement
            deletedElement.remove()

        }
    }
}