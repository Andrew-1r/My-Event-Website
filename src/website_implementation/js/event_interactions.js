document.addEventListener('DOMContentLoaded', () => {
    //retrives eventHTML from session storage
    const eventHTML = sessionStorage.getItem('eventHTML');

        if (eventHTML) {
            //if eventHTML is in session storage then find events container
            const targetDiv = document.getElementById('events-container');

        if (targetDiv) {
            //if we find events container then insert eventHTML into it
            targetDiv.insertAdjacentHTML('beforeend', eventHTML);
        }
    }
});