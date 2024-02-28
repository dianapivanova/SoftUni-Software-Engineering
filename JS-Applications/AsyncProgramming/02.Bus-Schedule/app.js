function solve() {

    let nextStopId = 'depot';
    const infoBox = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');


    let stopName = '';


    async function depart() {
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);

            if (!response.ok) {
                const error = new Error(response);
                throw error;
            }

            const data = await response.json();

            stopName = data.name;
            nextStopId = data.next;
            infoBox.textContent = `Next stop ${stopName}`
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            infoBox.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
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