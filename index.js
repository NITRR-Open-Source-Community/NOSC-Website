const hamNav = document.getElementById('hamburger_navbar');
const nav = document.getElementById('nav');

console.log(nav);

hamNav.addEventListener('click', (e) => {
    nav.style.height = "12.3rem";
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