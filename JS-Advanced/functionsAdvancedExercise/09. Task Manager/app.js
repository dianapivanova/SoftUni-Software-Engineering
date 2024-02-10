function solve() {
    let [addTaskSection, openTaskSection, inProgressTaskSection, completeTaskSection] = document.querySelectorAll('section');
    let formRef = document.querySelector('form');
    formRef.addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        let task = document.getElementById('task')
        let description = document.getElementById('description')
        let date = document.getElementById('date')

        if (task.value == '' || description.value == '' || date.value == '') {
            return;
        }

        createArticle(task.value, description.value, date.value)
        task.value = ''
        description.value = ''
        date.value = ''
    }

    function createArticle(task, desc, date) {
        let article = document.createElement('article');
        article.innerHTML = getArticleTemplate(task, desc, date)
        let divEl = openTaskSection.getElementsByTagName('div')[1]
        divEl.appendChild(article);

        let [greenBtn, redBtn] = article.querySelectorAll('button')
        greenBtn.addEventListener('click', onStart)
        redBtn.addEventListener('click', onDelete)
    }

    function onDelete(e) {
        let article = e.target.parentElement.parentElement
        article.remove()
    }

    function onStart(e) {
        let article = e.target.parentElement.parentElement;
        e.target.parentElement.remove()
        article.innerHTML +=
            `<div class ="flex">` +
            `<button class="red">Delete</button>` +
            `<button class="orange">Finish</button>` +
            `</div>`
        let [redBtn, yellowBtn] = article.querySelectorAll('button');
        redBtn.addEventListener('click', onDelete)
        yellowBtn.addEventListener('click', onFinish);
        let divEl = inProgressTaskSection.getElementsByTagName('div')[1]
        divEl.appendChild(article);
    }

    function onFinish(e) {
        let article = e.target.parentElement.parentElement;
        e.target.parentElement.remove()
        let divEl = completeTaskSection.getElementsByTagName('div')[1]
        divEl.appendChild(article);
    }

    function getArticleTemplate(name, desc, date) {
        return `<h3>${name}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            `<div class ="flex">` +
            `<button class="green">Start</button>` +
            `<button class="red">Delete</button>` +
            `</div>`
    }
}