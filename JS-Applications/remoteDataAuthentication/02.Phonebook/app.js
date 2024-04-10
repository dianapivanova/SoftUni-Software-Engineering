function attachEvents() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    //load phonebook
    const loadBtn = document.getElementById('btnLoad');
    const phonebookUl = document.getElementById('phonebook');
    // create phonebook
    const personRef = document.getElementById('person');
    const phoneRef = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');
    
    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    async function onLoad(e) {
        try {
            let req = await fetch(url);
            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message);
            }
            let data = await req.json();
            Array.from(Object.values(data)).forEach(x => {
                let liEl = document.createElement('li');
                liEl.id = x._id;
                liEl.textContent = `${x.person}: ${x.phone}`;
                let deleteBtn = document.createElement('button');
                liEl.appendChild(deleteBtn);
                deleteBtn.addEventListener('click', onDelete);
                deleteBtn.textContent = 'Delete';
                phonebookUl.appendChild(liEl);
            })
        } catch(err) {
            alert(err.message)
        }
    }

    async function onDelete(e) {
        let id = e.target.parentElement.id;
        try {
          let res =  await fetch(url + "/" + id, {
                method: "delete",
            });
            if(!res.ok) {
                let err = await res.json();
                throw new Error(err.message);
            }
        } catch (err) {
            alert(err.message);
        }
        e.target.parentElement.remove();
    }

    async function onCreate(e) {
        let person = personRef.value;
        let phone = phoneRef.value;
        try {
            let res = await fetch(url, {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({person, phone})
            });
            if(!res.ok) {
                let err = await res.json();
                throw new Error(err.message);
            }
            personRef.value = '';
            phoneRef.value = '';
            onLoad();
        } catch(err) {
            alert(err.message);
        }
    }
}

attachEvents();