function solve() {
    const [addTask, openTask, inProgressTask, completeTask] = document.querySelectorAll('section')
    const formRef = document.querySelector('form')

    formRef.addEventListener('submit', onDefault)

    btnhandlerENum = {
        start: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            currentArticle.innerHTML += getBtnPartial({ classes: 'red', text: 'Delete' }, { classes: 'orange', text: 'Finish' });
            let btns = currentArticle.querySelectorAll('button')
            addEventListenerToButton(btns)
            inProgressTask.children[1].appendChild(currentArticle);
        },
        finish: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            completeTask.children[1].appendChild(currentArticle);

        },
        delete: function (e) {
            e.target.parentElement.parentElement.remove()
        }
    }



    function onDefault(e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let taskName = formElements[0].value;
        let taskDescription = formElements[1].value;
        let taskDate = formElements[2].value;

        if (!taskName || !taskDescription || !taskDate) {
            return;
        }

        createArticle(taskName, taskDescription, taskDate);
        clearForm(formElements);
    }

    function clearForm(formElements) {
        formElements[0].value = ''
        formElements[1].value = ''
        formElements[2].value = ''
    }

    function createArticle(name, desc, date) {
        let newArticle = document.createElement('article');
        newArticle.innerHTML = getArticleTemplate(name, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll('button')
        addEventListenerToButton(btns)

    }

    function clickHandler(e) {
        let currentAction = e.target.innerText.toLowerCase();
        btnhandlerENum[currentAction](e)
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener('click', clickHandler))

    }

    function getArticleTemplate(name, desc, date) {
        return `<h3>${name}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial({ classes: 'green', text: 'Start' }, { classes: 'red', text: 'Delete' })
    }

    function getBtnPartial(btn1, btn2) {
        return `<div class="flex">` +
            `<button class="${btn1.classes}">${btn1.text}</button>` +
            `<button class="${btn2.classes}">${btn2.text}</button>` +
            `</div>`
    }

    function removeBtn(target) {
        target.remove()
    }
}