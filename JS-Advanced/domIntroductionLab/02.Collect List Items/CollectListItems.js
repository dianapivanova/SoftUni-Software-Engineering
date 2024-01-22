function extractText() {

    let result = []
    let list = document.getElementById('items')

    for (let el of list.children) {
        result.push(el.textContent)
    }

    let textArea = document.getElementById('result')

    textArea.value = result.join('\n')
}