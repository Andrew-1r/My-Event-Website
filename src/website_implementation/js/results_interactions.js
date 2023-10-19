const my_website_code = 'Andrew1991'

const baseURLEvents = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";


//const functions
const triggerFileInput = () => {
};

const handleFileChange = () => {
};

const handleFormSubmit = event => {
};

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
    .then(events => console.log(events))
    .catch(error => {
        console.error("Error processing events:", error.message);
        alert("There was a problem loading events. \
        Please refgresh the page to try again.");
    });
};

