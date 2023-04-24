const EVENTS_URL =
  "https://next-event-12fa5-default-rtdb.firebaseio.com/events.json";

const transformedData = (eventObject) => {
  const eventList = [];
  for (const key in eventObject) {
    eventList.push({
      id: key,
      description: eventObject[key].description,
      title: eventObject[key].title,
      image: eventObject[key].image,
      date: eventObject[key].date,
      location: eventObject[key].location,
      isFeatured: eventObject[key].isFeatured,
    });
  }
  return eventList;
};

export const getAllEvents = async () => {
  const allEvents = await fetch(EVENTS_URL);
  const allEventsJSON = await allEvents.json();
  const transformedEvents = transformedData(allEventsJSON);
  return transformedEvents;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id == id);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
