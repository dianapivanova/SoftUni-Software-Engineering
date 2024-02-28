async function getInfo() {

    const stopId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    let buses = document.getElementById('buses')

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }

        const data = await response.json();
        document.getElementById('stopName').textContent = data.name;
        Object.entries(data.buses).forEach((busId, time) => {
            const liItem = document.createElement('li');
            liItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
            buses.appendChild(liItem);
        })

    } catch (err) {
        document.getElementById('stopName').textContent = 'Error';
    }

}