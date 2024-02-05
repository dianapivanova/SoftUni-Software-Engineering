function extractText() {
    let items = document.getElementById('items');
    let textArea = document.getElementById('result');

    let result = []

    for (let li of Array.from(items.children)) {
        result.push(li.textContent)
    }

    textArea.value = result.join('\n')
}