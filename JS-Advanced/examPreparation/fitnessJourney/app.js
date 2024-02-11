window.addEventListener('load', solve);

/// fields (Name, Email, Contact Number, Preferred Class and Class Time) 

function solve() {

    const nameInputField = document.getElementById('name');
    const emailInputField = document.getElementById('email')
    const contactNumInputField = document.getElementById('contact-number')
    const classInputField = document.getElementById('class-type')
    const classTimeInputField = document.getElementById('class-time');
    const nextBtnRef = document.getElementById('next-btn');
    const previewUlRef = document.getElementsByClassName('class-info')[0];
    const confirmUlRef = document.getElementsByClassName('confirm-class')[0];
    const bodyRef = document.getElementById('body')
    const mainRef = document.getElementById('main')

    const formRef = document.querySelector('form')
    formRef.addEventListener('submit', onDefault)

    function onDefault(e) {
        e.preventDefault();

        let nameVal = nameInputField.value;
        let emailVal = emailInputField.value;
        let contactNumVal = contactNumInputField.value
        let classVal = classInputField.value
        let classTimeVal = classTimeInputField.value;

        if (nameVal == "" || emailVal == "" || contactNumVal == "" || classVal == "" || classTimeVal == "") {
            return;
        }

        let liElelement = document.createElement('li');
        liElelement.setAttribute("class", "info-item")
        let article = document.createElement('article');
        article.setAttribute('class', 'personal-info');

        let nameEl = document.createElement('p')
        nameEl.textContent = nameVal

        let emailEl = document.createElement('p')
        emailEl.textContent = emailVal

        let contactNumEl = document.createElement('p')
        contactNumEl.textContent = contactNumVal

        let classEl = document.createElement('p')
        classEl.textContent = classVal

        let classTimeEl = document.createElement('p')
        classTimeEl.textContent = classTimeVal

        article.appendChild(nameEl)
        article.appendChild(emailEl)
        article.appendChild(contactNumEl)
        article.appendChild(classEl)
        article.appendChild(classTimeEl)

        liElelement.appendChild(article)
        previewUlRef.appendChild(liElelement)

        let editBtn = document.createElement('button')
        editBtn.setAttribute("class", "edit-btn");
        editBtn.textContent = "Edit"
        liElelement.appendChild(editBtn)
        let continuteBtn = document.createElement('button')
        continuteBtn.setAttribute('class', 'continue-btn')
        continuteBtn.textContent = "Continue"
        liElelement.appendChild(continuteBtn)
        editBtn.addEventListener('click', onEdit)
        continuteBtn.addEventListener('click', onContinue)

        nameInputField.value = ''
        emailInputField.value = ''
        contactNumInputField.value = ''
        classInputField.value = ''
        classTimeInputField.value = ''
        nextBtnRef.disabled = true

        function onEdit(e) {

            nameInputField.value = nameVal
            emailInputField.value = emailVal
            contactNumInputField.value = contactNumVal
            classInputField.value = classVal
            classTimeInputField.value = classTimeVal
            nextBtnRef.disabled = false;
            liElelement.remove()
        }

        function onContinue(e) {
            liElelement.remove();

            let newLiEl = document.createElement('li')
            newLiEl.setAttribute("class", "continue-info");
            let newArticle = article;

            let cancelBtn = document.createElement('button')
            cancelBtn.setAttribute('class', 'cancel-btn')
            cancelBtn.textContent = "Cancel"
            cancelBtn.addEventListener("click", onCancel)

            let confirmBtn = document.createElement('button')
            confirmBtn.setAttribute('class', "confirm-btn")
            confirmBtn.textContent = "Confirm"
            confirmBtn.addEventListener('click', onConfirm)

            newLiEl.appendChild(newArticle)
            newLiEl.appendChild(cancelBtn)
            newLiEl.appendChild(confirmBtn)

            confirmUlRef.appendChild(newLiEl)

            function onCancel(e) {
                newLiEl.remove()
                nextBtnRef.disabled = false;
            }

            function onConfirm(e) {
                mainRef.remove()
                let h1El = document.createElement('h1')
                h1El.setAttribute('id', 'thank-you')
                h1El.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
                let doneBtn = document.createElement('button')
                doneBtn.setAttribute('id', "done-btn")
                doneBtn.textContent = "Done"
                doneBtn.addEventListener('click', refresh)

                bodyRef.appendChild(h1El)
                bodyRef.appendChild(doneBtn)

                function refresh(e) {
                    nextBtnRef.disabled = false;
                    location.reload()

                }

            }
        }

    }

}





