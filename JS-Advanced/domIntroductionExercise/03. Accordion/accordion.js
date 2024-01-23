function toggle() {
    let button = document.getElementsByClassName('button')[0]
    let divRef = document.getElementById('extra')

    if (button.textContent == 'More') {
        button.textContent = 'Less'
        divRef.style.display = 'block'
    } else if (button.textContent == 'Less') {
        button.textContent = 'More'
        divRef.style.display = 'none'
    }
}