window.addEventListener("load", solve);

function solve() {
    const numTicketsRef = document.getElementById('num-tickets');
    const seatingRef = document.getElementById('seating-preference');
    const nameRef = document.getElementById('full-name');
    const emailRef = document.getElementById('email');
    const phoneNumRef = document.getElementById('phone-number');
    const ticketPreview = document.getElementById('ticket-preview');
    const ticketPurchase = document.getElementById('ticket-purchase');
    const purchBtn = document.getElementById('purchase-btn');
    purchBtn.addEventListener('click', onDefault);
    const purchDiv = document.querySelector('.bottom-content');

    function onDefault(e) {
        e.preventDefault();
        if(numTicketsRef.value == '' ||
        seatingRef.value == '' ||
        nameRef.value == '' ||
        emailRef.value == '' ||
        phoneNumRef.value == '') {
            return;
        }

        let numTickets = numTicketsRef.value;
        let seating = seatingRef.value;
        let name = nameRef.value;
        let email = emailRef.value;
        let phone = phoneNumRef.value;

        let liElement = document.createElement('li');
        liElement.classList.add('ticket-purchase');
        let article = document.createElement('article');
        let par1 = document.createElement('p');
        par1.textContent = `Count: ${numTickets}`;
        let par2 = document.createElement('p');
        par2.textContent = `Preference: ${seating}`;
        let par3 = document.createElement('p');
        par3.textContent = `To: ${name}`;
        let par4 = document.createElement('p');
        par4.textContent = `Email: ${email}`;
        let par5 = document.createElement('p');
        par5.textContent = `Phone Number: ${phone}`;

        article.appendChild(par1);
        article.appendChild(par2);
        article.appendChild(par3);
        article.appendChild(par4);
        article.appendChild(par5);
        liElement.appendChild(article);

        let divEl = document.createElement('div');
        divEl.classList.add('btn-container');

        let editBtn = document.createElement('button');
        editBtn.textContent = `Edit`;
        editBtn.classList.add('edit-btn');
        let nextBtn = document.createElement('button');
        nextBtn.textContent = `Next`;
        nextBtn.classList.add('next-btn');

        divEl.appendChild(editBtn);
        divEl.appendChild(nextBtn);
        liElement.appendChild(divEl);
        ticketPreview.appendChild(liElement);

        editBtn.addEventListener('click', onEdit);
        nextBtn.addEventListener('click', onNext);

        purchBtn.disabled = true;
        numTicketsRef.value = '';
        seatingRef.value = '';
        nameRef.value = '';
        emailRef.value = '';
        phoneNumRef.value = '';

        function onEdit(e) {
           purchBtn.disabled = false;
           liElement.remove();
           numTicketsRef.value = numTickets;
           seatingRef.value = seating;
           nameRef.value = name;
           emailRef.value = email;
           phoneNumRef.value = phone;
        }

        function onNext(e) {
            liElement.remove();
            let newLiElement = document.createElement('li');
            newLiElement.classList.add('ticket-purchase');
            let newArticle = document.createElement('article');
            newArticle.appendChild(par1);
            newArticle.appendChild(par2);
            newArticle.appendChild(par3);
            newArticle.appendChild(par4);
            newArticle.appendChild(par5);

            let buyBtn = document.createElement('button');
            buyBtn.textContent = `Buy`;
            buyBtn.classList.add('buy-btn');

            newArticle.appendChild(buyBtn);
            newLiElement.appendChild(newArticle);
            ticketPurchase.appendChild(newLiElement);

            buyBtn.addEventListener('click', onBuy);

            function onBuy(e) {
                newLiElement.remove();
                let h2El = document.createElement('h2');
                h2El.textContent = `Thank you for your purchase!`;
                let backBtn = document.createElement('button');
                backBtn.textContent = `Back`;
                backBtn.classList.add('back-btn');
                purchDiv.appendChild(h2El);
                purchDiv.appendChild(backBtn);

                backBtn.addEventListener('click', onBack);

                function onBack(e) {
                    location.reload();
                }
            }
        }
    }
}
