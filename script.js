const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    logo = document.getElementById("logo"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text")


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    toggleDarkMode();
    localStorage.setItem("darkMode", body.classList.contains("dark"));
});


const toggleDarkMode = () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light";
        logo.src = "Images/PD Logo.png";
    } else {
        modeText.innerText = "Dark";
        logo.src = "Images/PD Logo Black.png";
    }
}

// Check for value on page load
let darkMode = localStorage.getItem("darkMode") === "true";
if (darkMode) {
    toggleDarkMode();
}
