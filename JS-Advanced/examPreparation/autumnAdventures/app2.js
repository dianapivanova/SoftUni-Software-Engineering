window.addEventListener('load', solve);

function solve() {
    const lastCheckSec = document.getElementById('second-field');
    const upcomingSec = document.getElementById('first-field');

    const finishedSec = document.getElementById('third-field');
    const addEventBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear');
    const timeInputRef = document.getElementById('time');
    const dateInputRef = document.getElementById('date');
    const placeInputRef = document.getElementById('place');
    const eventNameInputRef = document.getElementById('event-name');
    const emailInputRef = document.getElementById('email');

    addEventBtn.addEventListener('click', onDefault);

    function onDefault(e) {
        const time = timeInputRef.value;
        const date = dateInputRef.value;
        const place = placeInputRef.value;
        const event = eventNameInputRef.value;
        const email = emailInputRef.value;
        if (
            timeInputRef.value == '' ||
            dateInputRef.value == '' ||
            placeInputRef.value == '' ||
            eventNameInputRef.value == '' ||
            emailInputRef.value == ''
        ) {
            return;
        }

        let lastCheckUlRef = lastCheckSec.querySelector('ul');
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'event-content');

        let article = document.createElement('article');

        let dateTimePar = document.createElement('p');
        dateTimePar.textContent = `Begins: ${date} at: ${time}`;

        let placePar = document.createElement('p');
        placePar.textContent = `In: ${place}`;

        let eventPar = document.createElement('p');
        eventPar.textContent = `Event: ${event}`;

        let emailPar = document.createElement('p');
        emailPar.textContent = `Contact: ${email}`;

        article.appendChild(dateTimePar);
        article.appendChild(placePar);
        article.appendChild(eventPar);
        article.appendChild(emailPar);
        liElement.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', onEdit);
        liElement.appendChild(editBtn);

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', onContinue);
        liElement.appendChild(continueBtn);

        lastCheckUlRef.appendChild(liElement);

        addEventBtn.disabled = true;

        timeInputRef.value = '';
        dateInputRef.value = '';
        placeInputRef.value = '';
        eventNameInputRef.value = '';
        emailInputRef.value = '';

        function onEdit(e) {
            timeInputRef.value = time;
            dateInputRef.value = date;
            placeInputRef.value = place;
            eventNameInputRef.value = event;
            emailInputRef.value = email;

            liElement.remove();
            addEventBtn.disabled = false;
        }

        function onContinue() {
            liElement.remove();
            let upcomingSecUl = upcomingSec.querySelector('ul');
            let newLiElement = document.createElement('li');
            newLiElement.setAttribute('class', 'event-content');
            newLiElement.appendChild(article);

            let moveToFinishBtn = document.createElement('button');
            moveToFinishBtn.setAttribute('class', 'finished-btn');
            moveToFinishBtn.textContent = 'Move to Finished';

            newLiElement.appendChild(moveToFinishBtn);
            upcomingSecUl.appendChild(newLiElement);

            addEventBtn.disabled = false;

            moveToFinishBtn.addEventListener('click', onFinish);
            function onFinish() {
                let finishSecUl = finishedSec.querySelector('ul');
                newLiElement.removeChild(moveToFinishBtn);
                finishSecUl.appendChild(newLiElement);

                clearBtn.addEventListener('click', onClear);
                function onClear() {
                    newLiElement.remove();
                }
            }
        }
    }
}