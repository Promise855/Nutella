const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});