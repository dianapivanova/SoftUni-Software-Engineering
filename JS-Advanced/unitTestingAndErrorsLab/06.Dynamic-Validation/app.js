function validate() {
    let inputRef = document.getElementById('email')
    inputRef.addEventListener('change', onValidate)

    function onValidate(e) {
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/
        let emailValue = inputRef.value
        let match = emailValue.match(pattern)

        if (!match) {
            e.target.classList.add('error')
        }

        if (match) {
            e.target.classList.remove('error')
        }
    }
}