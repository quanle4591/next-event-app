import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  const featuredEvents = props.featuredEvents;

  return <div>{<EventList items={featuredEvents} />}</div>;
};

export default HomePage;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
};
