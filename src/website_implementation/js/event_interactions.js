document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the stored HTML from sessionStorage
    const eventHTML = sessionStorage.getItem('eventHTML');

        if (eventHTML) {
            // Insert the HTML into the DOM
            const targetDiv = document.getElementById('events-container');

        if (targetDiv) {
            // Insert the HTML into the div container
            targetDiv.insertAdjacentHTML('beforeend', eventHTML);
        }
    }
});