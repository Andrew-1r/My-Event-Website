function burger_function() {
    var links = document.getElementById("burger-links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}
