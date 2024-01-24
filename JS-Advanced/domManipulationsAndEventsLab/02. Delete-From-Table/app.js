function deleteByEmail() {
    let emailInput = document.querySelector('[name = "email"]').value;
    let tableRows = document.querySelectorAll('#customers tbody tr')
    let tableRef = document.getElementsByTagName('tbody')
    let resultRef = document.getElementById('result')

    let isRemoved = false;

    for (let row of tableRows) {
        let email = row.children[1].textContent
        if (email == emailInput) {
            row.remove()
            isRemoved = true;
        }

    }

    if (isRemoved) {
        resultRef.textContent = 'Deleted'
    } else {
        resultRef.textContent = 'Not found.'
    }

}