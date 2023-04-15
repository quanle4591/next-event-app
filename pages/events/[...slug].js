import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";

import { getFilteredEvents } from "@/dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const param = router.query.slug;
  if(param){
    const dateParam = {
      year: +param[0],
      month: +param[1]
    }
    const filteredEvents = getFilteredEvents(dateParam);
    if(filteredEvents.length > 0){
      return <>
        <EventList items={filteredEvents}/>
      </>
    }
  }
 
  return (
    <div>
      <p>No events found</p>
    </div>
  );
};
export default FilteredEventsPage;
