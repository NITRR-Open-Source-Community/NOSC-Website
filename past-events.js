const pastEvents = [
    {
      title: "HactoberFest 2023 plan",
      date: "2022-04-08",
      category: "speaker-session",
      link: "speaker-session-2022.html",
    },
    {
      title: "Coding Fest 2022",
      date: "2022-08-15",
      category: "Coding Fest",
      link: "coding-fest-2022.html",
    },
    {
      title: "Hackathon Challenge",
      date: "2022-06-20",
      category: "Hackathon",
      link: "hackathon-challenge.html",
    },
    {
        title: "20hour coding marathon",
        date: "2022-08-15",
        category: "Coding Fest",
        link: "coding-fest-2022.html",
      },
      {
        title: "Hackerrank challenge",
        date: "2021-08-15",
        category: "coding Fest",
        link: "coding-fest-2022.html",
      },
      {
        title: "Coding Fest 2021",
        date: "2021-08-15",
        category: "Coding Fest",
        link: "coding-fest-2022.html",
      },
  ];
  
  function filterEvents(category) {
    const eventList = document.querySelector(".PastEvents #event-list");
    eventList.innerHTML = "";
  
    pastEvents.forEach((event) => {
      if (category === "All" || event.category === category) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${event.link}">${event.title} (${event.date})</a>`;
        eventList.appendChild(listItem);
      }
    });
  }
  
  const filterSelect = document.getElementById("filter");
  filterSelect.addEventListener("change", () => {
    filterEvents(filterSelect.value);
  });
  
  filterEvents("All");
  
  function subscribeToEvent(eventId) {
    const eventElement = document.getElementById(eventId);
    const eventName = eventElement.getAttribute('data-event-name');
    const eventDate = eventElement.getAttribute('data-event-date');
    
    if (!isSubscribed(eventId)) {
        var eventData = {
            eventName,
            eventDate,
        };
        var eventDataJSON = JSON.stringify(eventData);
        console.log(eventDataJSON);
        localStorage.setItem(eventId, eventDataJSON);
        toggleButtons(eventId);
        alert(`You have successfully subscribed to ${eventName}.`);
    } else {
        alert(`You are already subscribed to ${eventName}.`);
    }
}

function unsubscribeFromEvent(eventId) {
    const eventElement = document.getElementById(eventId);
    const eventName = eventElement.getAttribute('data-event-name');
    if (isSubscribed(eventId)) {
        localStorage.removeItem(eventId);
        toggleButtons(eventId);
        alert(`You have successfully unsubscribed from ${eventName}.`);
    } else {
        alert(`You are not subscribed to ${eventName}.`);
    }
} 

function isSubscribed(eventName) {
    return localStorage.getItem(eventName) !== null;
}

function toggleButtons(eventId) {

    const eventElement = document.getElementById(eventId);
    const subscribeButton = eventElement.querySelector('.subscribe-button');
    const unsubscribeButton = eventElement.querySelector('.unsubscribe-button');

    if (localStorage.getItem(eventId)) {
        subscribeButton.style.display = "none";
        unsubscribeButton.style.display = "block";
    } else {
        subscribeButton.style.display = "block";
        unsubscribeButton.style.display = "none";
    }
}

function updateButtons() {
    const events = document.querySelectorAll('.event');
    events.forEach((event) => {
        const eventId = event.id;
        const subscribeButton = event.querySelector('.subscribe-button');
        const unsubscribeButton = event.querySelector('.unsubscribe-button');
        
        if (subscribeButton && unsubscribeButton) {
            if (isSubscribed(eventId)) {
                subscribeButton.style.display = 'none';
                unsubscribeButton.style.display = 'block';
            } else {
                subscribeButton.style.display = 'block';
                unsubscribeButton.style.display = 'none';
            }
        }
    });
}

window.addEventListener('load', updateButtons);