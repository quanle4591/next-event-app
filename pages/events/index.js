import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  }

  return (
  <>
    <EventSearch onSearch={findEventHandler}/>
    <EventList items={allEvents}/>
  </>);
};

export default AllEventsPage;
