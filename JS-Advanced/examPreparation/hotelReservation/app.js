window.addEventListener('load', solve);

function solve() {
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const dateInRef = document.getElementById('date-in');
    const dateOutRef = document.getElementById('date-out');
    const guestNumRef = document.getElementById('people-count');

    const nextBtn = document.getElementById('next-btn');
    const reservationInfoUl = document.getElementsByClassName('info-list')[0];
    const confirmReservationUl = document.getElementsByClassName('confirm-list')[0];

    const h1VerificationRef = document.getElementById('verification');


    nextBtn.addEventListener('click', onDefault);

    function onDefault(e) {
        e.preventDefault();
        if ((firstNameRef.value == '' ||
            lastNameRef.value == '' ||
            dateInRef.value == '' ||
            dateOutRef.value == '' ||
            guestNumRef.value == '') ||
            ((new Date(dateInRef.value)).getTime() >= (new Date(dateOutRef.value)).getTime())) {
            return;
        }

        let firstName = firstNameRef.value
        let lastName = lastNameRef.value
        let dateIn = dateInRef.value
        let dateOut = dateOutRef.value
        let gestNum = guestNumRef.value

        let liElement = document.createElement('li');
        liElement.classList.add('reservation-content');

        let article = document.createElement('article');

        let h3El = document.createElement('h3');
        h3El.textContent = `Name: ${firstName} ${lastName}`;

        let fromDateP = document.createElement('p');
        fromDateP.textContent = `From date: ${dateIn}`

        let toDateP = document.createElement('p');
        toDateP.textContent = `To date: ${dateOut}`;

        let peopleP = document.createElement('p');
        peopleP.textContent = `For ${gestNum} people`;

        article.appendChild(h3El);
        article.appendChild(fromDateP);
        article.appendChild(toDateP);
        article.appendChild(peopleP);

        liElement.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', onEdit);

        let continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');
        continueBtn.addEventListener('click', onContinue);

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        reservationInfoUl.appendChild(liElement);

        firstNameRef.value = '';
        lastNameRef.value = '';
        dateInRef.value = '';
        dateOutRef.value = '';
        guestNumRef.value = '';
        nextBtn.disabled = true;

        function onEdit() {
            liElement.remove();
            nextBtn.disabled = false;
            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            dateInRef.value = dateIn;
            dateOutRef.value = dateOut;
            guestNumRef.value = gestNum;
        }

        function onContinue() {
            liElement.remove();

            let newLiEl = document.createElement('li');
            newLiEl.classList.add('reservation-content');
            newLiEl.appendChild(article);

            let confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.addEventListener('click', onConfirm);

            let cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.addEventListener('click', onCancel);

            newLiEl.appendChild(confirmBtn);
            newLiEl.appendChild(cancelBtn);
            confirmReservationUl.appendChild(newLiEl);

            function onConfirm() {
                newLiEl.remove();
                nextBtn.disabled = false;
                h1VerificationRef.textContent = 'Confirmed.';
                h1VerificationRef.classList.add('reservation-confirmed');
            }

            function onCancel() {
                newLiEl.remove();
                nextBtn.disabled = false;
                h1VerificationRef.textContent = 'Cancelled.';
                h1VerificationRef.classList.add('reservation-cancelled');
            }
        }
    }
}





