function generateReport() {
    let checkedHeaders = []
    let output = document.getElementById('output')
    let tableHeaders = document.getElementsByTagName('th');
    let result = []

    for (let header of tableHeaders) {

        let inputElement = header.querySelector("th input[type='checkbox']")
        checkedHeaders.push(inputElement.name)

    }

    let tableRows = document.querySelectorAll('tbody tr');
    let headers = document.querySelectorAll("th input[type='checkbox']")

    for (let row of tableRows) {
        let emplObject = {}
        let tableData = row.querySelectorAll('td');

        for (let i = 0; i < tableData.length; i++) {
            let checkBox = headers[i]
            if (checkBox.checked) {
                emplObject[checkedHeaders[i]] = tableData[i].textContent
            }
        }

        result.push(emplObject)
    }

    output.value = JSON.stringify(result)
}