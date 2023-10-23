const my_website_code = 'Andrew1991'

const baseURLEvents = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
const postEventMethod = 'POST';
const eventsContainer = document.getElementById('events-container');

//fetch events from API
const getCommunityEvents = () => {
    //do i need this?
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

//setup page on first load
getCommunityEvents();