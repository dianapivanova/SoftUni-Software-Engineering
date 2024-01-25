function deleteByEmail() {

    let table = document.querySelectorAll("tbody tr");
    let searchedEmailAddress = document.querySelector('[name="email"]').value;
    let outputTextFormat = document.getElementById("result");
    let isFound = false;

    for (let row of table) {
        let emailInfo = row.getElementsByTagName('td')[1].textContent;

        if (emailInfo == searchedEmailAddress) {
            row.remove()
            isFound = true;
        }
    }

    if (isFound) {
        outputTextFormat.textContent = 'Deleted.'
    } else {
        outputTextFormat.textContent = 'Not found.'
    }

}