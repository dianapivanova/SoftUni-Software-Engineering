function getArticleGenerator(articles) {
    let copyArray = Array.from(articles);

    return function showNextArticle() {
        let divEl = document.getElementById('content');
        if (copyArray.length > 0) {
            let article = document.createElement('article');
            article.textContent = copyArray.shift();
            divEl.appendChild(article);
        }
    };
}
