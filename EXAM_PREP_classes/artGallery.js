class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture":200,"photo":50,"item":250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        let article = articleModel.toLowerCase();
        if(!this.possibleArticles.hasOwnProperty(article)) {
            throw new Error('This article model is not included in this gallery!')
        }
        let findArticle = this.listOfArticles.find(x => x.articleModel === article && x.articleName === articleName)
        if(findArticle) {
            findArticle.quantity += quantity
        } else {
            this.listOfArticles.push({articleModel: article, articleName, quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest ( guestName, personality) {
        let findGuest = this.guests.find(x => x.guestName === guestName);
        if(findGuest) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 0;
        if(personality == 'Vip') {
            points = 500;
        } else if(personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`
    }
    buyArticle ( articleModel, articleName, guestName) {
        let findArticle = this.listOfArticles.find(x => x.articleModel === articleModel && x.articleName === articleName);
        if(!findArticle) {
            throw new Error(`This article is not found.`)
        }
        if(findArticle.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        let findGuest = this.guests.find(x => x.guestName === guestName);
        if(!findGuest) {
            return 'This guest is not invited.'
        }
        let neededPoints = this.possibleArticles[articleModel];
        if(findGuest.points < neededPoints) {
            return 'You need to more points to purchase the article.'
        }

        findGuest.points -= neededPoints;
        findGuest.purchaseArticle += 1;
        findArticle.quantity -= 1;
        return `${guestName} successfully purchased the article worth ${neededPoints} points.`

    }
    showGalleryInfo (criteria) {
        if(criteria == 'article') {
            let result = ['Articles information:'];
            this.listOfArticles.map(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
            return result.join('\n')
        } else if(criteria == 'guest') {
            let result = ['Guests information:'];
            this.guests.map(x => result.push(`${x.guestName} - ${x.purchaseArticle}`));
            return result.join("\n");
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

