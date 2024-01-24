function sumTable() {
    let tableRows = document.getElementsByTagName('tr')
    let output = document.getElementById('sum')
    let total = 0

    for (let i = 1; i < tableRows.length - 1; i++) {
        let num = tableRows[i].getElementsByTagName('td')[1]
        total += Number(num.textContent)
    }

    output.textContent = total
}