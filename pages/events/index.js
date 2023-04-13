import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return (
  <>
    <EventSearch />
    <EventList items={allEvents}/>
  </>);
};

export default AllEventsPage;
