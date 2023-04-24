import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";

import { getFilteredEvents } from "../../helpers/api-util";

const FilteredEventsPage = (props) => {
  const router = useRouter();
  const param = router.query.slug;
  if (param) {
    const filteredEvents = props.filteredEvents;
    if (!props.notFound) {
      return (
        <>
          <EventList items={filteredEvents} />
        </>
      );
    }

    return (
      <div>
        <p>No events found</p>
      </div>
    );
  }

  return (
    <div>
      <p>Invalid search</p>
    </div>
  );
};
export default FilteredEventsPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const filterData = params.slug;
  const dateParam = {
    year: +filterData[0],
    month: +filterData[1],
  };
  const filteredEvents = await getFilteredEvents(dateParam);
  //console.log("filtered Events: ", filteredEvents);
  if (filteredEvents.length > 0) {
    return {
      props: {
        filteredEvents: filteredEvents,
        notFound: false,
      },
    };
  }
  return {
    props: {
      notFound: true,
    },
  };
};
