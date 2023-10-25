//toggles burger menu visibility on click
function burger_function() {
    var links = document.getElementById("burger-menu");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}

//sign up form toggle visibility
const signup_window = document.getElementById("signup-window");
const signup_btn = document.getElementById("signup-button");
const close_btn = document.getElementsByClassName("close")[0];

signup_btn.onclick = function() {
    signup_window.style.display = "block";
}
close_btn.onclick = function() {
    signup_window.style.display = "none";
}
//close if user clicks off form
window.onclick = function(event) {
  if (event.target == signup_window) {
    signup_window.style.display = "none";
  }
}

