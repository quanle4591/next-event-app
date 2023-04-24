import { getAllEvents, getEventById } from "../../helpers/api-util";

import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";

const EventDetailPage = (props) => {
  const event = props.event;
  if (event) {
    return (
      <div>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          addres={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>{event.description}</EventContent>
      </div>
    );
  } else {
    return <p>Event not found</p>;
  }
};

export default EventDetailPage;

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();
  const allIds = allEvents.map((event) => event.id);
  const paramsArray = allIds.map((e) => ({
    params: {
      eventId: e,
    },
  }));
  return {
    paths: paramsArray,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
};
