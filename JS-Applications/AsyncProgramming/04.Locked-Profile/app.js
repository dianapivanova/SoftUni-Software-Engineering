async function lockedProfile() {
  const url = `http://localhost:3030/jsonstore/advanced/profiles`;
  let userNum = 1;
  try {
    let res = await fetch(url);
    if (!res.ok) {
      let err = await res.json();
      throw new Error(err);
    }
    let data = await res.json();
    document.getElementById('main').innerHTML = '';
    Object.values(data).forEach((x) => {
      createUserCard(x, userNum);
      userNum++;
    });
  } catch (err) {
    alert(err.message);
  }

  Array.from(document.querySelectorAll('.userHiddenFields')).forEach(x => x.style.display = 'none');
  Array.from(document.querySelectorAll('main button')).forEach(x => x.addEventListener('click', onClick));
}

function createUserCard(obj, userNum) {
  let divEl = document.createElement('div');
  divEl.classList.add('profile');
  divEl.innerHTML = `
              <img src="./iconProfile2.png" class="userIcon" />
              <label>Lock</label>
              <input type="radio" name="user${userNum}Locked" value="lock" checked>
              <label>Unlock</label>
              <input type="radio" name="user${userNum}Locked" value="unlock"><br>
              <hr>
              <label>Username</label>
              <input type="text" name="user${userNum}Username" value="${obj.username}" disabled readonly />
              <div class="userHiddenFields">
                  <hr>
                  <label>Email:</label>
                  <input type="email" name="user${userNum}Email" value="${obj.email}" disabled readonly />
                  <label>Age:</label>
                  <input type="text" name="user${userNum}Age" value="${obj.age}" disabled readonly />
              </div>
              
              <button>Show more</button>
          `;
  
        document.getElementById('main').appendChild(divEl);
        
}

function onClick(e) {
    if(e.target.textContent == 'Show more') {
        if(e.target.parentElement.querySelector('input[type="radio"]').checked == false) {
            e.target.parentElement.querySelector('.userHiddenFields').style.display = 'block';
            e.target.textContent = 'Hide it';
        }
    } else if(e.target.textContent == 'Hide it') {
        if(e.target.parentElement.querySelector('input[type="radio"]').checked == false) {
            e.target.parentElement.querySelector('.userHiddenFields').style.display = 'none';
            e.target.textContent = 'Show more';
        }
    }

    
}

