function loadRepos() {
	const list = document.getElementById('repos');

	function loadRepos() {
		const username = document.getElementById('username').value
		const url = `https://api.github.com/users/testnakov/repos`;

		fetch(url)
			.then(onHeaders)
			.then(onSuccess)
			.then(onError);
	}

	function onHeaders(response) {
		if (!response.ok) {
			throw 'Error';
		}
		return response.json();
	}

	function onSuccess(data) {
		list.replaceChildren(...data.map(createListItem));
	}

	function onError(error) {
		list.textContent = error;
	}

	function createListItem({ html_url, full_name }) {
		const item = document.getElementById('li');
		const anchor = document.createElement('a');
		anchor.href = html_url;
		item.appendChild(anchor);

		return item;
	}
}