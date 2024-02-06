function generateReport() {
    let checkedHeaders = []
    let output = document.getElementById('output')
    let tableHeaders = document.getElementsByTagName('th');

    for (let header of tableHeaders) {
        let checkBox = header.querySelector('[type="checkbox"]')
        if (checkBox.checked == true) {
            inputElement = document.querySelector('input[name="employee"]')
            checkedHeaders.push(inputElement.name)
        }
    }

    let tableRows = document.querySelector('table').children
    console.log(tableRows)
}