function toggle() {
    let buttonRef = document.getElementsByClassName('button')[0];
    let divRef = document.getElementById('extra');

    if (buttonRef.textContent == 'More') {
        divRef.style.display = 'block';
        buttonRef.textContent = 'Less'
    } else {
        divRef.style.display = 'none'
        buttonRef.textContent = 'More'
    }

}