import { homePage } from "./home.js";
import { registerPage } from "./register.js";
import { loginPage } from "./login.js";
document.querySelector('nav').addEventListener('click', onNavigate);

const routes = {
    '/login': loginPage,
    '/register': registerPage,
    '/': homePage
}
function onNavigate(event) {

    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);
        const view = routes[url.pathname];
        view();
    }



}
