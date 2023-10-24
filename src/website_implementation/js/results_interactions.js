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
        //Filter events
        const filteredEvents = [];
        console.log("Current filters:", current_filters);
        console.log("Filtered events:", filteredEvents);

        events.forEach(event => {
            if (event.event_type === "Workshop") {
              console.log("This is a workshop event.");
              if (current_filters.workshops === event.event_type) {
                console.log("Workshop added")
                filteredEvents.push(event);
              };
            } else if (event.event_type === "Webinar") {
              console.log("This is a webinar event.");
              if (current_filters.webinars === event.event_type) {
                console.log("Webinar added")
                filteredEvents.push(event);
              };
            } else if (event.event_type === "Seminar") {
                console.log("This is a seminar event.");
                if (current_filters.seminars === event.event_type) {
                    console.log("Seminar added")
                    filteredEvents.push(event);
                  };
            } else if (event.event_type === "Group Activity") {
                console.log("This is a group activity event.");
                if (current_filters.group_activities === event.event_type) {
                    console.log("Group activity added")
                    filteredEvents.push(event);
                  };              
            }
          });
        
        console.log("New filtered events: ", filteredEvents)

        //Populate events
        console.log("Events:", events);
        while (eventsContainer.firstChild) {
            eventsContainer.removeChild(eventsContainer.firstChild);
        }
        filteredEvents.forEach(event => {
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
let current_filters = {
    workshops: document.getElementById('workshops').checked = "Workshop",
    webinars: document.getElementById('webinars').checked = "Webinar",  
    seminars: document.getElementById('seminars').checked = "Seminar",
    group_activities: document.getElementById('group-activities').checked = "Group Activity",  
};

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
    current_filters = {
        workshops: document.getElementById('workshops').checked ? "Workshop" : "False",
        webinars: document.getElementById('webinars').checked ? "Webinar" : "False",
        seminars: document.getElementById('seminars').checked ? "Seminar" : "False",
        group_activities: document.getElementById('group-activities').checked ? "Group Activity" : "False"
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
    current_filters = {
        workshops: document.getElementById('workshops').checked = "Workshop",
        webinars: document.getElementById('webinars').checked = "Webinar",  
        seminars: document.getElementById('seminars').checked = "Seminar",
        group_activities: document.getElementById('group-activities').checked = "Group Activity",  
    };
}
  clear_filters_btn.onclick = function() {
    clear_filters()
    search()
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