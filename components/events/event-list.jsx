import EventItem from "./event-item";
import styles from "./event-list.module.css";

const EventList = ({ items }) => {
  const eventListDisplay = items.map((event) => {
    return (
      <ul key={event.id} className={styles.list}>
        <EventItem event={event} />
      </ul>
    );
  });
  return <>{eventListDisplay}</>;
};

export default EventList;
