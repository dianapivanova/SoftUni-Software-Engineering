async function attachEvents() {

    const postUrl = `http://localhost:3030/jsonstore/blog/posts`;
    const commentUrl = `http://localhost:3030/jsonstore/blog/comments/`;
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const postsOptions= document.getElementById('posts');
    const viewPostBtn = document.getElementById('btnViewPost');
    let postData = {};
    const postTitleH1 = document.getElementById('post-title');
    const postBodyPar = document.getElementById('post-body');
    const postCommentsUl = document.getElementById('post-comments');
    
    loadPostsBtn.addEventListener('click', getPosts);

    async function getPosts(e) {
        postData = await makeRequest(postUrl);
        Object.entries(postData).forEach(x => {
            let optionEl = document.createElement('option');
            optionEl.value = x[0];
            optionEl.textContent = x[1].title;
            postsOptions.appendChild(optionEl);
        })
    }

    viewPostBtn.addEventListener('click', onViewPosts)

    async function onViewPosts(e) {
        postCommentsUl.innerHTML = '';
        let id = postsOptions.value;
        let title = postData[id].title;
        let content= postData[id].body;
        postTitleH1.textContent = title;
        postBodyPar.textContent = content;

        let data = await makeRequest(commentUrl);
        for(let entries of Object.entries(data)) {
            if(entries[1].postId == id) {
                let liEl = document.createElement('li');
                    liEl.id = entries[1].id;
                    liEl.textContent = entries[1].text;
                    postCommentsUl.appendChild(liEl);
        }
    }
}

async function makeRequest(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}
}


attachEvents()