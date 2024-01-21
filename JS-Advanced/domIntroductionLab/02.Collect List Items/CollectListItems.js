function extractText() {
    let content = document.getElementById('items')
    let result = []

    let array = Array.from(content.children)
    for (let el of array) {
        result.push(el.textContent)
    }

    const textArea = document.getElementById('result')
    textArea.value = result.join('\n')
}