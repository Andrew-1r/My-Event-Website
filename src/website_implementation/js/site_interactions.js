function burger_function() {
    var links = document.getElementById("burger-links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}

//javascript search button no search logic / functionality yet
function search() {
    const search_value = document.getElementById("search-box").value;
    const filters = document.getElementById("search-filter").value;
    //future search logic goes here, e.g. combine search terms and filter
}

function toggle_filter_form() {
    var filters = document.getElementById("search-filter-form");
    if (filters.style.display === "block") {
        filters.style.display = "none";
    } else {
        filters.style.display = "block";
    }
}