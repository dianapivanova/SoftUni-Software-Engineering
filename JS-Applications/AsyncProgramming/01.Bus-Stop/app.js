async function getInfo() {
  const inputRef = document.getElementById("stopId");
  const submitBtn = document.getElementById("submit");
  const resultRef = document.getElementById("stopName");
  const busesRef = document.getElementById("buses");
  inputRef.textContent = '';
  busesRef.innerHTML = '';


  let busStop = inputRef.value;
  let url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }
    let data = await response.json();
    resultRef.textContent = data.name;
    let allBuses = Object.entries(data.buses);
    allBuses.forEach(x => {
        let liEl = document.createElement('li');
        liEl.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`
        busesRef.appendChild(liEl);
    })
  } catch (err) {
    resultRef.textContent = "Error";
  }
}
