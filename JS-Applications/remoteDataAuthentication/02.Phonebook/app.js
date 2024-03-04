function attachEvents() {
    //GET DATA
    const loadBtn = document.getElementById('btnLoad');
    const ulEl = document.getElementById('phonebook');

    loadBtn.addEventListener('click', onLoad);

    //CREATE DATA
    const personDataRef = document.getElementById('person');
    const phoneDataRef = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', onCreate);

    async function onLoad() {
        const url = `http://localhost:3030/jsonstore/phonebook`;

        try {
            let response = await fetch(url);

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            let data = await response.json();

            Object.values(data).forEach(x => {
                let liEl = document.createElement('li');
                liEl.textContent = `${x.person}: ${x.phone}`;
                liEl.id = x['_id'];
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', onDelete);
                liEl.appendChild(deleteBtn);
                ulEl.appendChild(liEl);
            })

        } catch (err) {
            alert(err.message);
        }
    }

    async function onDelete(e) {
        let key = e.target.parentElement.id;
        let url = `http://localhost:3030/jsonstore/phonebook/${key}`;

        try {
            let request = await fetch(url, {
                method: 'delete'
            })

            if (!request.ok) {
                const error = await request.json();
                throw error;
            }
        } catch (err) {
            alert(err.message);
        }

        e.target.parentElement.remove();
    }

    async function onCreate(e) {
        const url = `http://localhost:3030/jsonstore/phonebook`;
        let person = personDataRef.value;
        let phone = phoneDataRef.value;

        try {
            let request = await fetch(url, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ person, phone })
            });

            if (!request.ok) {
                const err = await request.json();
                throw err
            }

        } catch (err) {
            alert(err.message)
        }
    }
}

attachEvents();