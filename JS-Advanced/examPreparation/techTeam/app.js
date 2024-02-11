window.addEventListener('load', solution);

function solve() {
    let [pickClassSec, previewSec, confirmClassSec] = Array.from(document.getElementById('wrapper').children);
    let formRef = document.querySelector('form');
    formRef.addEventListener('submit', onDefault);

    let nameVar = document.getElementById('name');
    let emailVar = document.getElementById('email');
    let contactNumvar = document.getElementById('contact-number');
    let preferredClassVar = document.getElementById('class-type');
    let preferredClassTime = document.getElementById('class-time');

    let inputValues = {};

    function onDefault(e) {
        e.preventDefault();

        if (nameVar.value == ''
            || emailVar.value == ''
            || contactNumvar.value == ''
            || preferredClassVar.value == ''
            || preferredClassTime.value == '') {
            return;
        }

        inputValues = {
            name: nameVar.value,
            email: emailVar.value,
            contactNum: contactNumvar.value,
            preferredClass: preferredClassVar.value,
            preferredTime: preferredClassTime.value
        };

        createArticle();
        clearContent();
        document.querySelector('#next-btn').disabled = true;
    }

    let btnFunctions = {
        edit: (e) => {
            document.querySelector('#next-btn').disabled = false;
            nameVar.value = inputValues.name;
            emailVar.value = inputValues.email;
            contactNumvar.value = inputValues.contactNum;
            preferredClassVar.value = inputValues.preferredClass;
            preferredClassTime.value = inputValues.preferredTime;
            e.target.parentElement.remove();
        },
        continue: (e) => {
            let articleLi = e.target.parentElement;
            articleLi.classList.remove('info-item');
            articleLi.classList.add('continue-info');
            e.target.parentElement.querySelectorAll('button').forEach(x => x.remove());
            articleLi.innerHTML += getButtons({ class: 'cancel-btn', name: "Cancel" }, { class: "confirm-btn", name: "Confirm" });
            Array.from(articleLi.querySelectorAll('button')).forEach(x => x.addEventListener('click', btnFunctions[x.textContent.toLowerCase()]));
            document.querySelector('.confirm-class').appendChild(articleLi);
        },
        cancel: (e) => {
            e.target.parentElement.remove();
            document.querySelector('#next-btn').disabled = false;
        },
        confirm: (e) => {
            document.getElementById('main').remove();
            let h1El = document.createElement('h1');
            h1El.id = "thank-you";
            h1El.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
            let button = document.createElement('button');
            button.textContent = "Done";
            button.id = "done-btn";

            document.body.appendChild(h1El);
            document.body.appendChild(button);
            button.addEventListener('click', onRefresh);
        }
    };

    function onRefresh(e) {
        location.reload();
    }

    function createArticle() {
        let articleLi = document.createElement('li');
        articleLi.classList.add('info-item');
        articleLi.innerHTML = createArticleHTML(inputValues);
        Array.from(articleLi.querySelectorAll('button')).forEach(x => x.addEventListener('click', btnFunctions[x.textContent.toLowerCase()]));
        document.querySelector('.class-info').appendChild(articleLi);
    }

    function createArticleHTML(inputValues) {
        return (
            `<article class="personal-info">` +
            `<p>${inputValues.name}</p>` +
            `<p>${inputValues.email}</p>` +
            `<p>${inputValues.contactNum}</p>` +
            `<p>${inputValues.preferredClass}</p>` +
            `<p>${inputValues.preferredTime}</p>` +
            `</article>` +
            getButtons({ class: 'edit-btn', name: "Edit" }, { class: "continue-btn", name: "Continue" }));
    }

    function getButtons(btn1, btn2) {
        return (
            `<button class="${btn1.class}">${btn1.name}</button>` +
            `<button class="${btn2.class}">${btn2.name}</button>`
        );
    }

    function clearContent() {
        nameVar.value = '';
        emailVar.value = '';
        contactNumvar.value = '';
        preferredClassVar.value = '';
        preferredClassTime.value = '';
    }
}




