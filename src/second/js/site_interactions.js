// Function to update ARIA attrributes
const updateAriaAttributes = () => {
    const width = window.innerWidth;
    const header_menu = document.getElementsByClassName("flex-header-menu")[0];
    const footer_menu = document.getElementsByClassName("flex-footer-menu")[0];
    const side_menu = document.getElementsByClassName("flex-side-menu")[0];

    if (width <= 600) {
        header_menu.setAttribute("aria-hiddren", "true");
        side_menu.setAttribute("aria-hidden", "true");
        footer_menu.setAttribute("aria-hidden", "false");
    } else if (width <= 992) {
        header_menu.setAttribute("aria-hiddren", "true");
        side_menu.setAttribute("aria-hidden", "false");
        footer_menu.setAttribute("aria-hidden", "true");        
    } else {
        header_menu.setAttribute("aria-hiddren", "false");
        side_menu.setAttribute("aria-hidden", "true");
        footer_menu.setAttribute("aria-hidden", "true");        
    }
}

// Run this code when the page loads
updateAriaAttributes();
window.addEventListener("resize", updateAriaAttributes);