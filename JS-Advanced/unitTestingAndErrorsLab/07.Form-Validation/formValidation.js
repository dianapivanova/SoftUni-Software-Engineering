function validate() {
    const usernameRef = document.getElementById('username')
    const emailRef = document.getElementById('email')
    const passwordRef = document.getElementById('password')
    const confirmPassRef = document.getElementById('confirm-password')
    const isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', companyValidate)

    let companyNumberRef = document.getElementById('companyNumber');
    const companyInfoField = document.getElementById('companyInfo');

    let validDiv = document.getElementById('valid')

    const usernamePattern = /^[A-Za-z0-9]{3,20}$/
    const passwordPattern = /^\w{5,15}$/
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

    let buttonRef = document.getElementById('submit');
    buttonRef.addEventListener('click', onSubmit);

    function companyValidate(e) {
        if (e.target.checked == true) {
            companyInfoField.style.display = 'block';
        } else {
            companyInfoField.style.display = 'none';
        }
    }

    let isValid = true;
    function onSubmit(e) {
        e.preventDefault();

        let name = usernameRef.value;
        let email = emailRef.value;
        let password = passwordRef.value;
        let confirmPass = confirmPassRef.value;

        let matchName = name.match(usernamePattern)
        let matchEmail = email.match(emailPattern)
        let passMatch = password.match(passwordPattern)

        if (!matchName || name == "") {
            isValid = false;
            usernameRef.style.borderColor = 'red'
        } else {
            usernameRef.style.border = 'none'
        }

        if (!passMatch || password == "") {
            isValid = false;
            passwordRef.style.borderColor = 'red'
        } else {
            passwordRef.style.border = 'none'
        }

        if (confirmPass !== password || confirmPass == "") {
            isValid = false;
            confirmPassRef.style.borderColor = 'red'
            passwordRef.style.borderColor = 'red'
        } else {
            confirmPassRef.style.border = 'none'
            passwordRef.style.border = 'none'
        }

        if (!matchEmail || email == "") {
            isValid = false;
            emailRef.style.borderColor = 'red'
        } else {
            emailRef.style.border = 'none'
        }

        if (isCompanyCheckbox.checked == true) {
            let companyNum = companyNumberRef.value;
            if (companyNum < 1000 || companyNum > 9999) {
                isValid = false;
                companyNumberRef.style.borderColor = 'red'
            } else {
                companyNumberRef.style.border = 'none'
            }
        }

        if (isValid) {
            validDiv.style.display = 'block'
        }

    }


}
