function colorize() {
    let table = document.querySelectorAll('tr')
    let tableArr = Array.from(table)

    for (let i = 1; i < tableArr.length; i += 2) {
        tableArr[i].style.background = 'teal'
    }
}