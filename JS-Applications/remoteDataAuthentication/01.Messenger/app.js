function attachEvents() {
    const textArea = document.getElementById('messages');
    const nameInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');
    const url = `http://localhost:3030/jsonstore/messenger`;

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh); 4

    async function onSend() {
        let author = nameInput.value;
        let content = messageInput.value;

        let request = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ author, content })
        });

    }

    async function onRefresh() {
        let response = await fetch(url);
        const data = await response.json();

        let result = [];
        Object.values(data).forEach(x => {
            result.push(`${x.author}: ${x.content}`);
        })
        textArea.value = result.join('\n');
    }

}

attachEvents();