const hamNav = document.getElementById('hamburger_navbar');
const nav = document.getElementById('nav');
const contentNav = document.getElementById('navbarSupportedContent');
const items = document.querySelectorAll('.nav-item');
let i = 0;
console.log(nav);

hamNav.addEventListener('click', (e) => {
  if (i%2==0) {
    nav.style.height = "auto";
    for (var x = 0; x < items.length; x++){
      items[x].style.display = 'block';}
  }
  else{
    nav.style.height = "4.3rem";
    for (var x = 0; x < items.length; x++){
      items[x].style.display = 'none';}
  }
  i++;
  console.log(i);
})

const knowOurTeamLink = document.getElementById("know-our-team-link");
const myteamSection = document.getElementById("myteam-section");
knowOurTeamLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default jump behavior
  // Calculate the offset of the target section from the top of the page
  const offsetTop = myteamSection.offsetTop;
  // Scroll to the target section with a smooth animation
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
});