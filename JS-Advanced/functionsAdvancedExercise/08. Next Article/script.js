function getArticleGenerator(articles) {
    const output = document.getElementById('content')
    let ourArrCopy = articles.slice();

    return function getNextOne() {
        if (ourArrCopy[0] !== undefined) {
            let article = document.createElement('article');
            article.textContent = articles.shift()
            output.appendChild(article)
        }

        return getNextOne;
    }
}
