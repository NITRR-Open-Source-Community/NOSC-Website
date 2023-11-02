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


function showNotification(eventName) {
  const notificationContainer = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.className = 'notification';

  const text = document.createElement('div');
  text.className = 'notification-text';
  text.textContent = eventName;
  
  notification.classList.add('hidden');
  notification.appendChild(text);
  notificationContainer.appendChild(notification);
  void notification.offsetWidth;

  setTimeout(() => {
      notification.classList.add('hidden');
      notification.style.opacity = '0';
      setTimeout(() => {
          notificationContainer.removeChild(notification);
          
          if (notificationContainer.children.length === 0) {
              notificationContainer.style.display = 'none';
          }
      }, 500);
  }, 3000);

  notificationContainer.style.display = 'block';
}

if ("Notification" in window) {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      } else if (permission === "denied") {
        console.log("Notification permission denied.");
      } else {
        console.log("Notification permission not set.");
      }
    })
    .catch((error) => {
      console.error("Error requesting notification permission:", error);
    });
} else {
  console.log("Notifications not supported in this browser.");
}


function checkEventsForNotifications() {
  const currentDate = new Date();
  for (var i = 0; i < localStorage.length; i++) {
      var eventId = localStorage.key(i);
      var eventDataJSON = localStorage.getItem(eventId);

      if (eventDataJSON){
          var eventData = JSON.parse(eventDataJSON);
          var eventName = eventData.eventName;
          var eventDate = new Date(eventData.eventDate)
          var daysRemaining = Math.ceil((eventDate - currentDate) / (1000 * 60 * 60 * 24));
          if (daysRemaining >= 0) {
              showNotification(`Event: ${eventName}, ${daysRemaining} days Remaining`);
          } else {
              localStorage.removeItem(eventId);
          }
      }
      
  }
  const notificationContainer = document.getElementById('notification-container');
  const reminderText = document.querySelector('.notification-reminder');
  if (notificationContainer.children.length > 1) {
      reminderText.style.display = 'block';
      setTimeout(() => {
        reminderText.style.display = 'none';
        notificationContainer.style.display = 'none';
      }, 3500);
  } else {
      reminderText.style.display = 'none';
  }

  if (notificationContainer.children.length === 1) {
      reminderText.style.display = 'none';
  }
}

window.addEventListener('load', checkEventsForNotifications);

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


// Scrolling animation  
let Sections = document.querySelectorAll('section');
window.onscroll = () => {
  Sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 50;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) 
    {
      sec.classList.add('show-animate');  
    } 
    else 
    {
      sec.classList.remove('show-animate');
    }
  })
}