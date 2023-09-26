//toggles burger menu on click
function burger_function() {
    var links = document.getElementById("burger-links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}

//javascript search button no search logic / functionality yet 
// - need to update to hold output from filter form
function search() {
    const search_value = document.getElementById("search-box").value;
    const filters = document.getElementById("search-filter").value;
    //future search logic goes here, e.g. combine search terms and filter
}

//search filter form functionality
var filter_window = document.getElementById("search-filter-window");
var filter_btn = document.getElementById("search-filter-button");
var close_btn = document.getElementsByClassName("close")[0];
//open and close
filter_btn.onclick = function() {
    filter_window.style.display = "block";
}
close_btn.onclick = function() {
    filter_window.style.display = "none";
}
//close if click off form
window.onclick = function(event) {
  if (event.target == filter_window) {
    filter_window.style.display = "none";
  }
}