function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const infoSecRef = document.querySelector(".info");
  let busId = "depot";
  let stopName = "";

  async function depart() {
    let url = `http://localhost:3030/jsonstore/bus/schedule/${busId}`;

    try {
      let res = await fetch(url);
      if (!res.ok) {
        let err = await res.json();
        throw new Error(err);
      }
      let data = await res.json();
      stopName = data.name;
      infoSecRef.textContent = `Next stop ${stopName}`;
      busId = data.next;
    } catch (err) {
        console.error(err.message);
      infoSecRef.textContent = `Error`;
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  function arrive() {
    infoSecRef.textContent = `Arriving at ${stopName}`
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return { depart, arrive };
}

let result = solve();
