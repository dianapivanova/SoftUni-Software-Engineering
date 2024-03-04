function solve() {

    const departBtn = document.getElementById('depart');
    departBtn.addEventListener('click', depart);

    const arriveBtn = document.getElementById('arrive');
    arriveBtn.addEventListener('click', arrive);

    const textArea = document.querySelector('.info');

    let stopId = 'depot';
    let stopName = '';

    async function depart(e) {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                const error = await response.json();
                throw error
            }
            const data = await response.json();
            stopName = data.name;
            stopId = data.next;
            textArea.textContent = `Next Stop: ${stopName}`
            arriveBtn.disabled = false;
            departBtn.disabled = true;
        } catch (err) {
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            textArea.textContent = 'Error';
        }

    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoBox.textContent = `Arriving at ${stopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();