const hamNav = document.getElementById('hamburger_navbar');
const nav = document.getElementById('nav');

console.log(nav);

hamNav.addEventListener('click', (e) => {
    nav.style.height = "12.3rem";
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
