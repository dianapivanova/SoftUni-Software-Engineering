function validate() {
    //<name>@<domain>.<extension>
    let pattern = /[a-z]+\@[a-z]+\.[a-z]+/
    let inputRef = document.getElementById('email')
    inputRef.addEventListener('change', onChange)

    function onChange(e) {
        e.target.classList.add('error');
        let match = e.target.value.match(pattern);
        if (match) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error')
        }
    }

}