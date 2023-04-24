import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";

import { getAllEvents } from "../../helpers/api-util";

const AllEventsPage = (props) => {
  const allEvents = props.allEvents;
  const router = useRouter();
  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();
  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
};
