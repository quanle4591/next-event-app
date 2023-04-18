import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

const EVENTS_URL =
  "https://next-event-12fa5-default-rtdb.firebaseio.com/events.json";

const HomePage = (props) => {
  const featuredEvents = props.featuredEvents;
  console.log(featuredEvents);

  return <div>{<EventList items={featuredEvents} />}</div>;
};

export default HomePage;

export const getStaticProps = async () => {
  const allEvents = await fetch(EVENTS_URL);
  const allEventsJSON = await allEvents.json();
  const transformedEvents = [];
  for (const key in allEventsJSON) {
    transformedEvents.push({
      id: key,
      description: allEventsJSON[key].description,
      title: allEventsJSON[key].title,
      image: allEventsJSON[key].image,
      date: allEventsJSON[key].date,
      location: allEventsJSON[key].location,
      isFeatured: allEventsJSON[key].isFeatured,
    });
  }
  return {
    props: {
      featuredEvents: transformedEvents.filter((event) => event.isFeatured),
    },
  };
};
