//toggles burger menu visibility on click
function burger_function() {
    var links = document.getElementById("burger-menu");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}