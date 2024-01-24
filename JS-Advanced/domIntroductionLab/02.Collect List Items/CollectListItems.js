function extractText() {
    let textarea = document.getElementById('result')
    let list = document.getElementById('items')
    let result = []

    for (let row of Array.from(list.children)) {
        result.push(row.textContent)
    }

    textarea.value = result.join('\n')
}