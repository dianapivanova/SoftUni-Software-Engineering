const loginForm = document.querySelector('form#login');

loginForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(loginForm);
    let { email, password } = Object.fromEntries(formData);
    const url = 'http://localhost:3030/users/login';

    try {
        const request = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (!request.ok) {
            const err = await request.json();
            throw new Error(err.message)
        }
        const data = await request.json();
        localStorage.setItem('userData', JSON.stringify(data));

        window.location = './index.html';

    } catch (err) {
        document.querySelector('form').reset();
        alert(err.message);
    }
}

