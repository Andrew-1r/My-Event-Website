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

//javascript search button no search logic / functionality yet 
// - need to update to hold output from filter form
function search() {
    const search_value = document.getElementById("search-box").value;
    const filters = document.getElementById("search-filter").value;
    //future search logic goes here, e.g. combine search terms and filter
}

//search filter form open and close
const filter_window = document.getElementById("search-filter-window");
const filter_btn = document.getElementById("search-filter-button");
const close_btn = document.getElementsByClassName("close")[0];
const apply_filters_btn = document.getElementById("apply-filters-button");
const clear_filters_btn = document.getElementById("clear-filters-button");
let current_filters = {};

filter_btn.onclick = function() {
    filter_window.style.display = "block";
}
close_btn.onclick = function() {
    filter_window.style.display = "none";
}
//close if user clicks off form
window.onclick = function(event) {
  if (event.target == filter_window) {
    filter_window.style.display = "none";
  }
}
//apply filters 
function update_filters() {
    current_filters ={
        hatha: document.getElementById('hatha').checked,
        ashtanga: document.getElementById('ashtanga').checked,  
        nice_hikes: document.getElementById('nice_hikes').checked,
        challening_hikes: document.getElementById('challening_hikes').checked,   
        fiction: document.getElementById('fiction').checked,
        guitar_books: document.getElementById('guitar_books').checked,
    };
}
  apply_filters_btn.onclick = function() {
    update_filters()
    console.log(current_filters);
}
//clear filters
function clear_filters() {
    current_filters ={
        hatha: document.getElementById('hatha').checked = false,
        ashtanga: document.getElementById('ashtanga').checked = false,  
        nice_hikes: document.getElementById('nice_hikes').checked = false,
        challening_hikes: document.getElementById('challening_hikes').checked = false,   
        fiction: document.getElementById('fiction').checked = false,
        guitar_books: document.getElementById('guitar_books').checked = false,
    };
}
  clear_filters_btn.onclick = function() {
    clear_filters()
    console.log(current_filters);
}