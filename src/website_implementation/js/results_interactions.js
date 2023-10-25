const my_website_code = 'Andrew1991'

const baseURLEvents = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
const postEventMethod = 'POST';
const eventsContainer = document.getElementById('events-container');
let event_list;


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
        event_list = events;
        //Filter events
        const filteredEvents = [];
        console.log("Current filters:", current_filters);

        events.forEach(event => {
            if (event.event_type === "Workshop") {
              if (current_filters.workshops === event.event_type) {
                console.log("Workshop added")
                filteredEvents.push(event);
              };
            } else if (event.event_type === "Webinar") {
              if (current_filters.webinars === event.event_type) {
                console.log("Webinar added")
                filteredEvents.push(event);
              };
            } else if (event.event_type === "Seminar") {
                if (current_filters.seminars === event.event_type) {
                    console.log("Seminar added")
                    filteredEvents.push(event);
                  };
            } else if (event.event_type === "Group Activity") {
                if (current_filters.group_activities === event.event_type) {
                    console.log("Group activity added")
                    filteredEvents.push(event);
                  };              
            }
          });
        
        console.log("Filtered events: ", filteredEvents)

        //Populate events
        console.log("Events:", events);
        while (eventsContainer.firstChild) {
            eventsContainer.removeChild(eventsContainer.firstChild);
        }
        filteredEvents.forEach(event => {
            const eventTemplate = `
            <article class="col-12 col-md-12 col-lg-6" data-eventid=${event.id}>
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

function search() {
    const search_value = document.getElementById("search-box").value;

    console.log(current_filters);
    console.log(search_value);
    getCommunityEvents();
}

//for individual event pages
document.addEventListener('DOMContentLoaded', () => {
    eventsContainer.addEventListener('click', function(event) {
        let target = event.target;
        while (target && !target.classList.contains('card')) {
            target = target.parentElement;
        }

        if (target) {
            //doesn't get anything not sure aht attribute to put on
            const eventID = target.getAttribute('data-eventid')
            //testing / debugging
            console.log('target: ', target)

            sessionStorage.setItem('eventHTML', target.outerHTML);

            window.location.href = 'event.html';

        }
    })
})
