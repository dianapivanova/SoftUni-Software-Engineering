const registerForm = document.querySelector('form#register');

registerForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(registerForm);
    let { email, password, rePass } = Object.fromEntries(formData);
    const url = 'http://localhost:3030/users/register';

    try {

        if (password !== rePass) {
            throw new Error('Passwords do not match');
        }

        const request = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password, rePass })
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