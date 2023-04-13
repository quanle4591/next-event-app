import { useRouter} from "next/router";
import { getEventById } from "@/dummy-data";

import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";

const EventDetailPage = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);
  if(event){
    console.log(event);
    return (
      <div>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} addres={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>{event.description}</EventContent>
      </div>
    );
  }
  else{
    return <p>Event not found</p>
  }
};

export default EventDetailPage;
