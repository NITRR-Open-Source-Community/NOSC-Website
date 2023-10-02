const hamNav = document.getElementById('hamburger_navbar');
const nav = document.getElementById('nav');
const contentNav = document.getElementById('navbarSupportedContent');
const items = document.querySelectorAll('.nav-item');
let i = 0;
console.log(nav);

hamNav.addEventListener('click', (e) => {
  if (i%2==0) {
    for (var x = 0; x < items.length; x++){
      items[x].style.display = 'block';}
    nav.style.height = "auto";
  }
  else{
    for (var x = 0; x < items.length; x++){
      items[x].style.display = 'none';}
    nav.style.height = "4.3rem";
  }
  i++;
  console.log(i);
})

const myTeamSection = document.getElementById("myteam-section");
function scrollToMyTeamSection() {
  const offsetTop = myTeamSection.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}

const knowOurTeamLink = document.getElementById("know-our-team-link");
knowOurTeamLink.addEventListener("click", function (event) {
  event.preventDefault();
  scrollToMyTeamSection();
});

const knowOurTeamLinkFooter = document.getElementById("know-our-team-link-footer");
knowOurTeamLinkFooter.addEventListener("click", function (event) {
  event.preventDefault();
  scrollToMyTeamSection();
});
