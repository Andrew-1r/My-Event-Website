// Base URL of the open meteo API endpoint
const baseUrl = 'https://api.open-meteo.com/v1/forecast';

// Query parameters as a JS object
const queryParams = {
    latitude: -27.069870,
    longitude: 137.129087,
    current_weather: true,
};

//Convert query params object into a query string
const queryString = new URLSearchParams(queryParams).toString();

//Full URL with query parameters
// const urlWithParams = '${baseUrl}?${queryString}';
const urlWithParams = baseUrl+"?"+queryString;

//Request options
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

//Making the fetch call
fetch(urlWithParams, requestOptions)
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;
        console.log("Current temperature: " + weather.temperature + "C");
    })
    .catch(error => console.log('error', error));