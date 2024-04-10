function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const messagesArea = document.getElementById('messages');
    const nameInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    async function onRefresh(e) {
        try {
            let req = await fetch(url);
            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message);
            }
            let data = await req.json();
            let result = [];
            Array.from(Object.values(data)).forEach(x => {
                result.push(`${x.author}: ${x.content}`)
            })
            messagesArea.textContent = result.join('\n');
            console.log('bruh');
        } catch(err) {
            alert(err.message)
        }
    }

    async function onSend(e) {
        let author = nameInput.value;
        let content = messageInput.value;

        try{ 
            let req = await fetch(url,{
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({author, content})
            });
            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message);
            }
        } catch(err) {
            alert(err.message)
        }
        nameInput.value = '';
        messageInput.value = '';
    }
}

attachEvents();