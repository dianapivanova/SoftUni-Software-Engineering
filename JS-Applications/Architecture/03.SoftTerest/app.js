import { getUser, setUser, hasUser as importedHasUser } from "./src/utils/userUtils.js";
import { showRegisterView } from "./src/views/registerView.js";
Array.from(document.querySelectorAll('main div[data-selection="section"]')).map(x => x.remove());

let ctx = {
    render: renderer,
    goTo: goTo,
    updateNav
}

const routes = {
    "/": () => console.log('home'),
    "/home": () => console.log('home'),
    "/dashboard": () => console.log('dashboard'),
    "/create": () => console.log('create'),
    "/login": () => console.log('login'),
    "/register": showRegisterView,
    "/details": () => console.log('detais'),
    "/logout": () => console.log('logout'),
    "*": () => console.log('404 Page not found')
}

const main = document.querySelector('main');
const nav = document.querySelector('nav'); //we're making the routing here;
nav.addEventListener('click', onNavigate);
updateNav();

function updateNav() {
    const hasUser = importedHasUser();
    const guestAnchor = document.querySelectorAll("a[data-permission='guest']");
    const userAnchor = document.querySelectorAll("a[data-permission='user']");
    if (hasUser) {
        guestAnchor.forEach(x => x.style.display = 'none');
        userAnchor.forEach(x => x.style.display = 'block');
    } else {
        guestAnchor.forEach(x => x.style.display = 'block');
        userAnchor.forEach(x => x.style.display = 'none');
    }

}

function renderer(view) {
    main.replaceChildren(view);
}

function onNavigate(event) {
    event.preventDefault();
    let element = event.target;
    if (event.target.tagName !== 'A' && event.target.tagName !== 'IMG') {
        return;
    }
    if (event.target.tagName == 'IMG') {
        element = event.target.parentElement;
    }

    const viewName = new URL(element.href).pathname;
    goTo(viewName);
}



function goTo(name) {
    const handler = routes[name];
    if (typeof handler !== "function") {
        return routes['*']();
    }
    handler(ctx);
}