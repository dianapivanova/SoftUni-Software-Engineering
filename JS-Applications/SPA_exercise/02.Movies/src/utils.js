export function hideAllSections() {
    document.querySelectorAll('.view-section').forEach(s => s.style.display = 'none');
}

export function showView(section) {
    hideAllSections();
    section.style.display = 'block';
}

export function updateNavBar() {
    const user = sessionStorage.getItem('user');
    const welcomeMsg = document.getElementById('welcome-msg');

    if (user) {

    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'inline-block');
        welcomeMsg.style.display = 'none';

    }
}