//event api variables
const my_website_code = 'Andrew1991'
const baseURLEvents = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
const postEventMethod = 'POST';
const eventsContainer = document.getElementById('events-container');

//flatpickr date and time variables
const myInput = document.querySelector("#date_time");
const fp = flatpickr(myInput, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

//functions for event submission form
const triggerFileInput = () => {
    photoFileInput.click();
};
const handleFormSubmit = event => {
    event.preventDefault();

    let formData = new FormData(event.target);
    formData.append("website_code", my_website_code);

    const requestOptions = {
        method: postEventMethod,
        body: formData,
        redirect: 'follow'
    }
    
    fetch(baseURLEvents, requestOptions)
    .then(response => response.json().then(data => {
        if (!response.ok) {
            console.log("Server response:", data);
            throw new Error("Network response was not ok");
        }
        return data;
    }))
    .then(data => {
        console.log(data.description);
        alert(`Your event "${data.description}" has been submitted successfully!`);
        eventForm.reset();
        return data;
    })
    .then(data => {
        getCommunityEvents();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation', 
        error.message);
        alert("Error submitting event. Please try again.");
    });
};

//fetch submitted events from API
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
            <article class="col-12 col-md-12 col-lg-6" data-eventid=${event.id}>
                <button class="card-button">
                    <div class="card" role="group" aria-labelledby="card${event.id}-title" aria-describedby="card${event.id}-desc">
                        <h2 class="card-header p-2" id="card${event.id}-title">${event.name}</h2>
                        <img class="card-banner-image" src="${event.photo}" alt="${event.name}">
                        <p class="card-body-text p-2">${event.description}</p>
                        <p class="card-body-text px-2"><strong>Location:</strong> ${event.location}</p>
                        <p class="card-body-text px-2"><strong>Organiser:</strong> ${event.organiser}</p>
                        <p class="card-body-text px-2"><strong>Event Type:</strong> ${event.event_type}</p>
                        <p class="card-body-text px-2"><strong>Date and Time:</strong> ${new Date(event.date_time).toLocaleString()}</p>
                    </div>
                    </button>
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

//event listeners
eventForm.addEventListener('submit', handleFormSubmit);

//setup submitted events on first load
getCommunityEvents();