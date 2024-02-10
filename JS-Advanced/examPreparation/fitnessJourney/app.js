window.addEventListener('load', solve);

function solve() {
    let [pickClassSec, previewSec, confirmClassSec] = Array.from(document.getElementById('wrapper').children);
    let formRef = document.querySelector('form')
    formRef.addEventListener('submit', onDefault);

    let nameVar = document.getElementById('name')
    let emailVar = document.getElementById('email')
    let contactNumvar = document.getElementById('contact-number')
    let preferredClassVar = document.getElementById('class-type')
    let preferredClassTime = document.getElementById('class-time')

    let inputValuesArr = []

    function onDefault(e) {
        e.preventDefault()
        if (nameVar.value == ''
            || emailVar.value == ''
            || contactNumvar.value == ''
            || preferredClassVar.value == ''
            || preferredClassTime.value == '') {
            return;
        }

        inputValuesArr.push(nameVar.value, emailVar.value, contactNumvar.value, preferredClassVar.value, preferredClassTime.value);

        let articleLi = document.createElement('li');
        articleLi.classList.add('info-item');
        articleLi.innerHTML += createArticle(nameVar.value, emailVar.value, contactNumvar.value, preferredClassVar.value, preferredClassTime.value)
        Array.from(articleLi.querySelectorAll('button')).forEach(x => x.addEventListener('click', btnFunctions[x.textContent.toLowerCase()]))
        clearContent(nameVar, emailVar, contactNumvar, preferredClassVar, preferredClassTime);
        document.querySelector('.class-info').appendChild(articleLi);
        document.querySelector('#next-btn').disabled = true;
    }

    let btnFunctions = {
        edit: (e) => {
            document.querySelector('#next-btn').disabled = false;
            nameVar.value = inputValuesArr[0]
            emailVar.value = inputValuesArr[1]
            contactNumvar.value = inputValuesArr[2]
            preferredClassVar.value = inputValuesArr[3]
            preferredClassTime.value = inputValuesArr[4]
            e.target.parentElement.remove()
        },
        continue: (e) => {
            let articleLi = e.target.parentElement;
            articleLi.classList.remove('info-item')
            articleLi.classList.add('continue-info');
            e.target.parentElement.querySelectorAll('button').forEach(x => x.remove());
            articleLi.innerHTML += getButtons({ class: 'cancel-btn', name: "Cancel" }, { class: "confirm-btn", name: "Confirm" });
            Array.from(articleLi.querySelectorAll('button')).forEach(x => x.addEventListener('click', btnFunctions[x.textContent.toLowerCase()]))
            document.querySelector('.confirm-class').appendChild(articleLi);

        },
        cancel: (e) => {
            e.target.parentElement.remove();
            document.querySelector('#next-btn').disabled = false;
        },
        confirm: (e) => {
            document.getElementById('main').remove();
            let h1El = document.createElement('h1');
            h1El.id = "thank-you"
            h1El.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"
            let button = document.createElement('button')
            button.textContent = "Done"
            button.id = "done-btn"

            document.body.appendChild(h1El);
            document.body.appendChild(button);
            button.addEventListener('click', onRefresh);
        }
    }

    function onRefresh(e) {
        location.reload()
    }

    function createArticle(nameVar, emailVar, contactNumvar, preferredClassVar, preferredClassTime) {
        return (
            `<article class="personal-info">` +
            `<p>${nameVar}</p>` +
            `<p>${emailVar}</p>` +
            `<p>${contactNumvar}</p>` +
            `<p>${preferredClassVar}</p>` +
            `<p>${preferredClassTime}</p>` +
            `</article>` +
            getButtons({ class: 'edit-btn', name: "Edit" }, { class: "continue-btn", name: "Continue" }));

    }

    function getButtons(btn1, btn2) {
        return (
            `<button class="${btn1.class}">${btn1.name}</button>` +
            `<button class="${btn2.class}">${btn2.name}</button>`
        )
    }

    function clearContent(nameVar, emailVar, contactNumvar, preferredClassVar, preferredClassTime) {
        nameVar.value = ''
        emailVar.value = ''
        contactNumvar.value = ''
        preferredClassVar.value = ''
        preferredClassTime.value = ''
    }

}




