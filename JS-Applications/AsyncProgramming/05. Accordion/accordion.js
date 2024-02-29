async function solution() {
    const main = document.getElementById('main');

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const response = await fetch(url);
    const data = await response.json();

    for (let obj of data) {
        const divEl = document.createElement('div');
        divEl.classList.add('accordion');
        const headDiv = document.createElement('div');
        headDiv.classList.add('head');
        const span = document.createElement('span');
        span.textContent = obj.title;
        headDiv.appendChild(span);
        const button = document.createElement('button');
        button.classList.add('button');
        button.id = obj['_id'];
        button.textContent = 'More';
        headDiv.appendChild(button);
        divEl.appendChild(headDiv);

        extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');
        const par = document.createElement('p');
        par.textContent = await getParText(obj['_id'])
        extraDiv.appendChild(par);
        divEl.appendChild(extraDiv);

        main.appendChild(divEl);
        button.addEventListener('click', onClick)
    }

    async function getParText(id) {
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.content;
    }

    function onClick(e) {
        if (e.target.textContent == 'More') {
            e.target.parentElement.parentElement.querySelector('.extra').style.display = 'block';
            e.target.textContent = 'Less'
        } else {
            e.target.parentElement.parentElement.querySelector('.extra').style.display = 'none';
            e.target.textContent = 'More'
        }
    }

}

solution()