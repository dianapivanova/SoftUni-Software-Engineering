async function getInfo() {

    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');

    let stopId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }
        let data = await response.json();
        stopNameRef.textContent = data.name;
        Object.entries(data.buses).forEach(x => {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`;
            busesRef.appendChild(liEl);
        })

    } catch (err) {
        stopNameRef.textContent = 'Error';
    }
}

