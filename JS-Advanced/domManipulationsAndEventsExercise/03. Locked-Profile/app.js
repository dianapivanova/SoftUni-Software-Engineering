function lockedProfile() {
    //constants 
    const SHOW_MORE = "Show more";
    const HIDE_IT = "Hide it";

    //get button elements
    const btnElements = Array.from(document.querySelectorAll('div button'));

    // attach event listeners
    for (let btn of btnElements) {
        btn.addEventListener("click", show)
    }

    // on click functionality
    function show(event) {
        const divChildren = Array.from(event.target.parentElement.children);
        const isLocked = divChildren[2].checked;
        if (isLocked) {
            return;
        }

        const hiddenFieldElements = event.target.previousElementSibling;
        if (event.target.textContent == SHOW_MORE) {
            hiddenFieldElements.style.display = "inline"
            event.target.textContent = HIDE_IT;

            return;
        }

        hiddenFieldElements.style.display = "none";
        event.target.textContent = SHOW_MORE;
    }


}