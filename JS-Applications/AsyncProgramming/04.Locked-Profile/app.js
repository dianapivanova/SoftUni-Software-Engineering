async function lockedProfile() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const profilesData = await get(url);

    Object.values(profilesData).forEach((profile, index) => {
        const profileElement = createProfileCard(profile, index + 1);
        main.appendChild(profileElement);
    })


    function createProfileCard(profile, count) {

        const profileElement = document.createElement('div');
        profileElement.className = 'profile';

        profileElement.innerHTML = `
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${count}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${count}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${count}Username" value="${profile.username}" disabled readonly />`;

        const hiddenInfo = document.createElement('div');
        hiddenInfo.id = `user${count}HiddenFields`;

        hiddenInfo.innerHTML = `
					<hr>
					<label>Email:</label>
					<input type="email" name="user${count}Email" value="${profile.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${count}Age" value="${profile.age}" disabled readonly />`

        hiddenInfo.style.display = 'none';
        profileElement.appendChild(hiddenInfo);

        const button = document.createElement('button');
        button.textContent = 'Show more';
        button.addEventListener('click', (e) => toggleInfo(e, hiddenInfo, count));

        profileElement.appendChild(button);

        return profileElement;
    }

    function toggleInfo(e, hiddenInfo, count) {
        const button = e.target;
        const inputLock = document.querySelector(`[name="user${count}Locked"]`);

        if (inputLock.checked == false) {
            if (button.textContent == 'Show more') {
                button.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else if (button.textContent == 'Hide it') {
                button.textContent = 'Show more';
                hiddenInfo.style.display = 'none';
            }
        }
    }


    async function get(url) {
        try {
            const response = await fetch(url);
            if (response.ok == false) {
                const error = await response.json();
                throw error;
            }

            const data = await response.json();
            return data;

        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    }
}