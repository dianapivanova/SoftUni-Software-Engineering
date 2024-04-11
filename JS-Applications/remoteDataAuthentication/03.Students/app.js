const tBodyRef = document.querySelector("tbody");
const url = `http://localhost:3030/jsonstore/collections/students`;
const submitBtn = document.getElementById("submit");
const form = document.querySelector("form");

submitBtn.addEventListener("click", onSubmit);

window.onload = async function extractStudents() {
  try {
    let res = await fetch(url);
    if (!res.ok) {
      let err = await res.json();
      throw new Error(err.message);
    }
    let data = await res.json();
    Object.values(data).forEach((x) => {
      tBodyRef.innerHTML += `<tr>
            <td>${x.firstName}</td>
            <td>${x.lastName}</td>
            <td>${Number(x.facultyNumber)}</td>
            <td>${Number(x.grade)}</td>
        </tr>`;
    });
  } catch (err) {
    console.log(err.message);
    alert(err.message);
  }
};

async function onSubmit(e) {
    e.preventDefault();
  let data = new FormData(form);
  let firstName = data.get("firstName");
  let lastName = data.get("lastName");
  let facultyNumber = data.get("facultyNumber");
  let grade = data.get("grade");
  if (
    !firstName ||
    !lastName ||
    typeof Number(facultyNumber) !== "number" ||
    !grade ||
    isNaN(Number(grade)) || 
    isNaN(Number(facultyNumber))
  ) {
    return
  }
  try {
    let req = await fetch(url, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    })
    if(!req.ok) {
        let err = await req.json();
      throw new Error(err.message);
    }
    form.reset();

  } catch(err) {
    alert(err.message);
  }
}
