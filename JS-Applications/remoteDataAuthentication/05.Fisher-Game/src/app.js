
const userData = JSON.parse(localStorage.getItem('userData'));
document.querySelector('#catches').innerHTML = '';
document.querySelector('#catches').textContent = 'Click to load catches';

if (userData) {
    document.getElementById('logout').style.display = 'inline-block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
    document.querySelector('p.email span').textContent = userData.email;
    document.querySelector('.add').disabled = false;
} else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'inline-block';
    document.getElementById('register').style.display = 'inline-block';
}

const logOutBtn = document.getElementById('logout');
logOutBtn.addEventListener('click', onLogOut);

async function onLogOut(e) {

    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': userData.accessToken }
    })

    localStorage.clear();
    window.location = './index.html'
}

const loadBtn = document.querySelector('button.load')
loadBtn.addEventListener('click', onLoad);

async function onLoad(e) {
    let url = 'http://localhost:3030/data/catches';
    try {
        const request = await fetch(url);
        if (!request.ok) {
            let error = await request.json();
            throw new Error(error.message);
        }
        const data = await request.json();

        document.querySelector('#catches').textContent = '';
        const catchesContainer = document.getElementById('catches');
        data.forEach(catchData => {
            const catchElement = createCatch(catchData);
            console.log(catchElement); // Log the generated HTML for debugging
            catchesContainer.appendChild(catchElement);
        });
    } catch (error) {
        alert(error.message);
    }
}

function createCatch(data) {
    const isCreator = (userData && data._ownerId === userData._id);
    const catchElement = document.createElement('div');
    catchElement.classList.add('catch');

    catchElement.appendChild(createElement('label', {}, 'Angler'));
    catchElement.appendChild(createElement('input', { type: 'text', class: 'angler', value: data.angler, disabled: !isCreator }));
    catchElement.appendChild(createElement('label', {}, 'Weight'));
    catchElement.appendChild(createElement('input', { type: 'text', class: 'weight', value: data.weight, disabled: !isCreator }));
    catchElement.appendChild(createElement('label', {}, 'Species'));
    catchElement.appendChild(createElement('input', { type: 'text', class: 'species', value: data.species, disabled: !isCreator }));
    catchElement.appendChild(createElement('label', {}, 'Location'));
    catchElement.appendChild(createElement('input', { type: 'text', class: 'location', value: data.location, disabled: !isCreator }));
    catchElement.appendChild(createElement('label', {}, 'Bait'));
    catchElement.appendChild(createElement('input', { type: 'text', class: 'bait', value: data.bait, disabled: !isCreator }));
    catchElement.appendChild(createElement('label', {}, 'Capture Time'));
    catchElement.appendChild(createElement('input', { type: 'text', class: 'captureTime', value: data.captureTime, disabled: !isCreator }));

    // Create the update button
    const updateButton = createElement('button', { class: 'update', id: data._id });
    updateButton.textContent = 'Update';
    updateButton.disabled = !isCreator; // Disable if the user is not the creator
    updateButton.addEventListener('click', onUpdate);
    catchElement.appendChild(updateButton);

    // Create the delete button
    const deleteButton = createElement('button', { class: 'delete', id: data._id });
    deleteButton.textContent = 'Delete';
    deleteButton.disabled = !isCreator; // Disable if the user is not the creator
    deleteButton.addEventListener('click', onDelete)
    catchElement.appendChild(deleteButton);

    return catchElement;
}


function createElement(type, attr, ...content) {
    const element = document.createElement(type);
    for (const key in attr) {
        if (key === 'class') {
            element.className = attr[key];
        } else if (key === 'disabled') {
            element.disabled = attr[key];
        } else {
            element.setAttribute(key, attr[key]);
        }
    }

    for (let item of content) {
        if (typeof item === 'string' || typeof item === 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}

const addForm = document.getElementById('addForm');

addForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    if (!userData) {
        window.location = './login.html';
        return;
    }

    const formData = new FormData(addForm);
    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData)
    if (angler == '' ||
        weight == "" ||
        species == "" ||
        location == "" ||
        bait == "" ||
        captureTime == "") {
        alert('faggot'); return;
    }

    try {
        const url = 'http://localhost:3030/data/catches'
        let request = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        })
        if (!request.ok) {
            const error = await request.json();
            throw new Error(error)
        }
    } catch (err) {
        alert(err.message)
    }

}

async function onUpdate(e) {
    const id = e.target.id;
    const inputFields = Array.from(e.target.parentElement.querySelectorAll('input'));
    try {
        if (!inputFields || inputFields.length === 0) {
            throw new Error("No input fields found");
        }

        const values = inputFields.map(field => field.value);
        console.log("Input field values:", values);

        const [angler, weight, species, location, bait, captureTime] = values;

        console.log("Updated values:", angler, weight, species, location, bait, captureTime);

        const url = `http://localhost:3030/data/catches/${id}`;
        const request = await fetch(url, {
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        });

        if (!request.ok) {
            const error = await request.json();
            throw new Error(error);
        }
    } catch (err) {
        console.error("Error updating catch:", err);
        alert(err.message);
    }
}

async function onDelete(e) {
    const id = e.target.id
    try {
        const url = `http://localhost:3030/data/catches/${id}`;
        let request = await fetch(url, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.accessToken
            }
        })
        if (!request.ok) {
            const error = await request.json();
            throw new Error(error)
        }
    } catch (err) {
        alert(err.message)
    }
    e.target.parentElement.remove();
}