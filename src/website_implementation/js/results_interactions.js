const my_website_code = 'Andrew1991'

const baseURLEvents = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
const postEventMethod = 'POST';
const eventsContainer = document.getElementById('events-container');

//fetch events from API
const getCommunityEvents = () => {

    const queryParams = {
        website_code: my_website_code,
    }
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = baseURLEvents+"?"+queryString;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(urlWithParams, requestOptions)

    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not okay");
        }
        return response.json()
    })
    .then(events => {
        console.log(events);
        while (eventsContainer.firstChild) {
            eventsContainer.removeChild(eventsContainer.firstChild);
        }
        events.forEach(event => {
            const eventTemplate = `
            <article class="col-12 col-md-12 col-lg-6">
                <div class="card" role="group" aria-labelledby="card${event.id}-title" aria-describedby="card${event.id}-desc">
                    <h2 class="card-header p-2" id="card${event.id}-title">${event.name}</h2>
                    <img class="card-banner-image" src="${event.photo}" alt="${event.name}">
                    <p class="card-body-text p-2">${event.description}</p>
                    <p class="card-body-text px-2"><strong>Location:</strong> ${event.location}</p>
                    <p class="card-body-text px-2"><strong>Organiser:</strong> ${event.organiser}</p>
                    <p class="card-body-text px-2"><strong>Event Type:</strong> ${event.event_type}</p>
                    <p class="card-body-text px-2"><strong>Date and Time:</strong> ${new Date(event.date_time).toLocaleString()}</p>
                </div>
            </article>
            `;
            eventsContainer.innerHTML += eventTemplate;
        })
    })
    .catch(error => {
        console.error("Error processing events:", error.message);
        alert("There was a problem loading events. \
        Please refresh the page to try again.");
    });
};

//search filter form open and close
const filter_window = document.getElementById("search-filter-window");
const filter_btn = document.getElementById("search-filter-button");
const close_btn = document.getElementsByClassName("close")[0];
const apply_filters_btn = document.getElementById("apply-filters-button");
const clear_filters_btn = document.getElementById("clear-filters-button");
let current_filters = {};

filter_btn.onclick = function() {
    filter_window.style.display = "block";
    current_filters ={
        workshops: document.getElementById('workshops').checked = false,
        webinars: document.getElementById('webinars').checked = false,  
        seminars: document.getElementById('seminars').checked = false,
        group_activities: document.getElementById('group-activities').checked = false,   
    };
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
        workshops: document.getElementById('workshops').checked,
        webinars: document.getElementById('webinars').checked,  
        seminars: document.getElementById('seminars').checked,
        group_activities: document.getElementById('group-activities').checked,  
    };
}
  apply_filters_btn.onclick = function() {
    update_filters()  
    filter_window.style.display = "none";
    search()
}
    
//clear filters
function clear_filters() {
    filter_window.style.display = "none";
    current_filters ={
        workshops: document.getElementById('workshops').checked = true,
        webinars: document.getElementById('webinars').checked = true,  
        seminars: document.getElementById('seminars').checked = true,
        group_activities: document.getElementById('group-activities').checked = true,   
    };
}
  clear_filters_btn.onclick = function() {
    clear_filters()
}

//javascript search button no search logic / functionality yet 
// - need to update to hold output from filter form
function search() {
    const search_value = document.getElementById("search-box").value;

    //future search logic goes here, e.g. combine search terms and filter  
    console.log(current_filters);
    console.log(search_value);
    getCommunityEvents();
}