const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Diagon Alley tour for everyone",
    description: "The most famous alley for wizard community",
    location: "Hidden behind the Leaky Cauldron.",
    date: "2021-05-12",
    image: "images/Diagon-Alley.avif",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Halloween at Hogwarts",
    description:
      "The event occurs every year in Oct 31. Students usually have a great feast and enjoy the creepy decoration.",
    location: "Hogwarts main hall",
    date: "2021-05-30",
    image: "images/Hogwarts-Castle.avif",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Introduction to Wizard Banking System",
    description:
      "The second most safe place to hide your secret beside Hogwarts.",
    location: "In the middle of Diagon Alley",
    date: "2022-04-10",
    image: "images/Gringott.avif",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
