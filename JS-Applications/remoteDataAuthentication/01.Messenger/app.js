function attachEvents() {
    const nameRef = document.querySelector('input[name="author"]');
    const messageRef = document.querySelector('input[name="content"]');
    const msgArea = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', onSubmit);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', onDisplay);

    async function onSubmit(e) {
        let author = nameRef.value;
        let content = messageRef.value;

        try {

            let url = `http://localhost:3030/jsonstore/messenger`;
            const request = await fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ author, content })
            })

            if (!request.ok) {
                const error = await request.json();
                throw new Error(error.message);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    async function onDisplay() {
        const url = `http://localhost:3030/jsonstore/messenger`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error);
            };

            const result = [];
            const data = await response.json();
            Object.entries(data).forEach(x => {
                result.push(`${x[1].author}: ${x[1].content}`)
            });
            console.log(Object.entries(data))
            msgArea.value = result.join('\n');
        } catch (err) {
            alert(err.message)
        }
    }
}

attachEvents();