window.addEventListener('load', solve);

function solve() {
    const firstNameRef = document.getElementById('first-name')
    const lastNameRef = document.getElementById('last-name');
    const peopleCountRef = document.getElementById('people-count');
    const fromDateRef = document.getElementById('from-date');
    const countDaysRef = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onDefault);
    const ticketPreviewUl = document.getElementsByClassName('ticket-info-list')[0];
    const confirmTicketUl = document.getElementsByClassName('confirm-ticket')[0];

    const divElMain = document.getElementById('main');
    const bodyRef = document.querySelector('body');

    function onDefault(e) {
        e.preventDefault();
        if (firstNameRef.value == "" ||
            lastNameRef.value == "" ||
            peopleCountRef.value == "" ||
            fromDateRef.value == "" ||
            countDaysRef.value == "") {
            return;
        }

        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let peopleCount = peopleCountRef.value;
        let fromDate = fromDateRef.value;
        let countDays = countDaysRef.value;

        let liElement = document.createElement('li');
        liElement.classList.add('ticket');

        let article = document.createElement('article');

        let h3El = document.createElement('h3');
        h3El.textContent = `Name: ${firstName} ${lastName}`;
        let dateP = document.createElement('p');
        dateP.textContent = `From date: ${fromDate}`;
        let daysP = document.createElement('p');
        daysP.textContent = `For ${countDays} days`;
        let peopleP = document.createElement('p');
        peopleP.textContent = `For ${peopleCount} people`;

        article.appendChild(h3El);
        article.appendChild(dateP);
        article.appendChild(daysP);
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

        ticketPreviewUl.appendChild(liElement);

        firstNameRef.value = "";
        lastNameRef.value = "";
        peopleCountRef.value = "";
        fromDateRef.value = "";
        countDaysRef.value = "";

        nextBtn.disabled = true;

        function onEdit() {
            liElement.remove();
            nextBtn.disabled = false;
            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            peopleCountRef.value = peopleCount;
            fromDateRef.value = fromDate;
            countDaysRef.value = countDays;
        }

        function onContinue() {
            liElement.remove();
            let newLiEl = document.createElement('li');
            newLiEl.classList.add('ticket-content');
            newLiEl.appendChild(article);

            let confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.addEventListener('click', onConfirm);

            let cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.addEventListener('click', onCancel);

            newLiEl.appendChild(cancelBtn);
            newLiEl.appendChild(confirmBtn);

            confirmTicketUl.appendChild(newLiEl);

            function onCancel() {
                nextBtn.disabled = false;
                newLiEl.remove();
            };

            function onConfirm() {
                newLiEl.remove();
                bodyRef.removeChild(divElMain);
                let h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';
                let backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';
                backBtn.addEventListener('click', onBack)

                bodyRef.appendChild(h1);
                bodyRef.appendChild(backBtn);

                function onBack() {
                    location.reload();
                }
            }
        }
    }
}




