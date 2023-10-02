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