function toggle() {
    let buttonText = document.querySelector(".button");
    let text = document.getElementById("extra");

    if (buttonText.textContent == "More") {
        text.style.display = "block";
        buttonText.textContent = "Less";
    } else if (buttonText.textContent == "Less") {
        text.style.display = "none";
        buttonText.textContent = "More";
    }

}