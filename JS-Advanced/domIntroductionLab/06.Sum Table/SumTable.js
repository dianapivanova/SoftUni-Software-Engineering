function sumTable() {
    let table = document.getElementsByTagName('tr');
    let tableArr = Array.from(table)
    let resultArea = document.getElementById('sum')

    let sum = 0
    resultArea.textContent = 0

    for (let i = 1; i < tableArr.length; i++) {
        let num = Number(tableArr[i].children[1].textContent)
        sum += num
    }

    resultArea.textContent = sum.toFixed(2);

}