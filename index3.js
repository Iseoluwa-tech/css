const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    menuIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block'; // Hide the menu icon when the menu is active
    navLinks.style.paddingTop = navLinks.classList.contains('active') ? '0%' : '20px';
    navLinks.style.paddingBottom = navLinks.classList.contains('active') ? '0%' : '20px';
    navLinks.style.opacity = navLinks.classList.contains('active') ? '1' : '0';
});