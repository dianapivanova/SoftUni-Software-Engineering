function solve() {
    const nameRef = document.getElementById('recipientName');
    const titleRef = document.getElementById('title');
    const messageRef = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const mailListSec = document.querySelector('#list');
    const sendMailsSec = document.querySelector('.sent-list');
    const deletedMailsSec = document.querySelector('.delete-list');

    addBtn.addEventListener('click',onDefault);
    resetBtn.addEventListener('click', onReset);

    function onReset(e) {
        e.preventDefault();
        nameRef.value = '';
        titleRef.value = '';
        messageRef.value = '';
    }

    function onDefault(e) {
        e.preventDefault();
        if(nameRef.value == '' ||
        titleRef.value == '' ||
        messageRef.value == '') {
            return;
        }
        let name = nameRef.value;
        let title = titleRef.value; 
        let message = messageRef.value;

        let liElement = document.createElement('li');
        let h4El1 = document.createElement('h4');
        h4El1.textContent = `Title: ${title}`
        let h4El2 = document.createElement('h4');
        h4El2.textContent = `Recipient Name: ${name}`;
        let spanEl = document.createElement('span');
        spanEl.textContent = message;
        let divEl = document.createElement('div');
        divEl.id = 'list-action';

        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';

        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';

        divEl.appendChild(sendBtn);
        divEl.appendChild(deleteBtn);

        liElement.appendChild(h4El1);
        liElement.appendChild(h4El2);
        liElement.appendChild(spanEl);
        liElement.appendChild(divEl);

        mailListSec.appendChild(liElement);

        nameRef.value = '';
        titleRef.value = '';
        messageRef.value = '';

        sendBtn.addEventListener('click', onSend);
        deleteBtn.addEventListener('click', onDelete);

        function onSend(e) {
            e.preventDefault();
            liElement.remove();
            let newLiElement = document.createElement('li');
            let span1 = document.createElement('span');
            span1.textContent = `To: ${name}`;
            let span2 = document.createElement('span');
            span2.textContent = `Title: ${title}`;
            let newDiv = document.createElement('div');
            newDiv.classList.add('btn');
            let deleteBtn2 = document.createElement('button');
            deleteBtn2.type = 'submit';
            deleteBtn2.classList.add('delete');
            deleteBtn2.textContent = 'Delete';
            newDiv.appendChild(deleteBtn2);
            newLiElement.appendChild(span1);
            newLiElement.appendChild(span2);
            newLiElement.appendChild(newDiv);
            sendMailsSec.appendChild(newLiElement);

            deleteBtn2.addEventListener('click', onDelete2);

            function onDelete2(e) {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();
                newLiElement.querySelector('div').remove();
                deletedMailsSec.appendChild(newLiElement);
            }
        }

        function onDelete(e) {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();

            let finalLiElement = document.createElement('li');
            let span1 = document.createElement('span');
            span1.textContent = `To: ${name}`;
            let span2 = document.createElement('span');
            span2.textContent = `Title: ${title}`;
            finalLiElement.appendChild(span1);
            finalLiElement.appendChild(span2);
            deletedMailsSec.appendChild(finalLiElement);
            
        }
    }
}
solve()