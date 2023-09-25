//Function to change card height
const changeCardHeights = () => {
    let maxHeight = 0;

    // get all cards and store in an array
    const cards = Array.from(document.getElementsByClassName('card'));

    //reset all card heights to auto
    cards.forEach(card => card.style.height = 'auto');

    // find the tallest card
    cards.forEach(card => {
        if (card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight;
        }
    });

    // set all card heights to height of tallest card
    cards.forEach(card => card.style.height = maxHeight + 'px');
}

window.addEventListener('load', changeCardHeights);
window.addEventListener('resize', changeCardHeights);