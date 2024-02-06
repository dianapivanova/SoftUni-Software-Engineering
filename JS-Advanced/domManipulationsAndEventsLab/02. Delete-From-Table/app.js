function deleteByEmail() {
    let resultRef = document.querySelector('input[name="email"]')
    let outputField = document.getElementById('result');
    let tableRef = document.querySelectorAll('tbody tr')


    for (let row of tableRef) {
        let lookedEmail = resultRef.value;

        if (lookedEmail == row.querySelectorAll('td')[1].textContent) {
            outputField.textContent = 'Deleted.'
            row.remove(); break;

        } else {
            outputField.textContent = 'Not found.'
        }
    }


}