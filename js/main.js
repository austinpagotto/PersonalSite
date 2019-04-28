// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const smHeading = document.querySelector('.sm-heading');
const aboutPhoto = document.querySelector('.bio-image');

// Set state of menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if (!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        smHeading.classList.add('close');
        if (aboutPhoto){
            aboutPhoto.classList.add('close');
        }
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        smHeading.classList.remove('close');
        if (aboutPhoto){
            aboutPhoto.classList.remove('close');
        }
        showMenu = false;
    }
}