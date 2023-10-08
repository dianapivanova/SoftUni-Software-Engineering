function passwordValidator(pass) {

    let validPassLength = checkPassLength(pass)
    let checkLettersDigits = checkOnlyLettersDigits(pass)
    let twoDigitsCheck = checkDigitCount(pass)

    if (validPassLength && checkLettersDigits && twoDigitsCheck) {
        console.log("Password is valid")
    }


    function checkPassLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true
        } else {
            console.log("Password must be between 6 and 10 characters")
            return false;
        }
    }

    function checkOnlyLettersDigits(password) {
        for (let currentChar of password) {
            let code = currentChar.charCodeAt(0)

            if (
                !((code >= 48 && code <= 57) ||
                    (code >= 65 && code <= 90) ||
                    (code >= 97 && code <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }

        return true;
    }

    function checkDigitCount(password) {
        let digitCounter = 0
        for (let currentChar of password) {
            let code = currentChar.charCodeAt(0)
            if (code >= 48 && code <= 57) {
                digitCounter++
            }
        }

        if (digitCounter < 2) {
            console.log("Password must have at least 2 digits")
            return false;
        } else {
            return true;
        }
    }

}
passwordValidator('Pa$s$s')