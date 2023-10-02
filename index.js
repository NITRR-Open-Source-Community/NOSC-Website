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

// Logo hover effect 
class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }
  
  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }
  
  calculatePosition() {
    gsap.set(this.el, {
      x: 0,
      y: 0,
      scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
  }
  
  onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.7 : 0.5);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }
    
    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }
  
  onHover(x, y) {
    gsap.to(this.el,  {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: 'power2.out',
      duration: 0.4
    });
    this.el.style.zIndex = 10;
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 1.7
    });
    this.el.style.zIndex = 1;
  }
}
const btn1 = document.getElementById("logo-hover");
new HoverButton(btn1);