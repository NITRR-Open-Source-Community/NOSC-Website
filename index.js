const hamNav = document.getElementById('hamburger_navbar');
const nav = document.getElementById('nav');

console.log(nav);

hamNav.addEventListener('click', (e) => {
    nav.style.height = "12.3rem";
})