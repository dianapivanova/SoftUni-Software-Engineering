function attachEvents() {

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const postsOptionsRef = document.getElementById('posts');
    const postDetailsH1 = document.getElementById('post-body');
    const commentsUl = document.getElementById('post-comments');

    loadPostsBtn.addEventListener('click', getOptions);

    async function getOptions() {
        const postUrl = `http://localhost:3030/jsonstore/blog/posts`;
        const response = await fetch(postUrl);
        const data = await response.json();

        for (let key in data) {
            let optionEl = document.createElement('option');
            optionEl.textContent = data[key].title;
            optionEl.value = key
            postsOptionsRef.appendChild(optionEl);
        }
    };

    viewButton.addEventListener('click', getPosts);

    async function getPosts() {


        let id = '';

        document.querySelectorAll('option').forEach(x => {
            if (x.selected) {
                id = x.value;
            }
        })

        const post = `http://localhost:3030/jsonstore/blog/posts/${id}`;
        const responsePost = await fetch(post);
        const postData = await responsePost.json();
        postDetailsH1.textContent = postData.body;

        const url = `http://localhost:3030/jsonstore/blog/comments/`;
        const response = await fetch(url);
        const data = await response.json();

        for (let key in data) {
            let liElement = document.createElement('li');
            if (data[key].postId == id) {
                liElement.textContent = data[key].text;
                commentsUl.appendChild(liElement);
            }
        }
    }
}

attachEvents();