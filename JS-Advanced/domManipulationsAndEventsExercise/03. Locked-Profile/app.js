function lockedProfile() {
    let arrButtons = Array.from(document.querySelectorAll('button'))

    for (let button of arrButtons) {
        button.addEventListener('click', onShow)
    }

    function onShow(e) {

        let check = e.target.parentElement.querySelector('input[value="lock"]');


        if (e.target.textContent == 'Show more') {
            if (!check.checked) {
                e.target.parentElement.querySelector('div').style.display = 'inline-block';
                e.target.textContent = 'Hide it'
            }
        } else if (e.target.textContent == 'Hide it') {
            if (!check.checked) {
                e.target.parentElement.querySelector('div').style.display = 'none';
                e.target.textContent = 'Show more'
            }
        }


    }

}