function focused() {

    let divEls = document.querySelectorAll('div div');

    for (let divEl of divEls) {
        let inputField = divEl.querySelector('input[type="text"]')
        inputField.addEventListener('focus', onFocus)
        inputField.addEventListener('blur', lostFocus)
    }

    function onFocus(e) {
        e.target.parentElement.classList.add('focused')
    }

    function lostFocus(e) {
        e.target.parentElement.classList.remove('focused')
        e.target.value = ''
    }
}