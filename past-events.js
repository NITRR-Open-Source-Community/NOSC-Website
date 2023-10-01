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
  