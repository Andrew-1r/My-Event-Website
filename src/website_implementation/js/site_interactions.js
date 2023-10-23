//js testing output
//document.getElementById("demo").innerHTML = "Hello JavaScript";

//toggles burger menu on click
function burger_function() {
    var links = document.getElementById("burger-menu");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}