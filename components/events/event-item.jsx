//import Image from "next/image";
import Link from "next/link";
import styles from "./event-item.module.css";

import Button from "../ui/button";

const EventItem = ({ event }) => {
  const { title, image, date, location, id } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt="image" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h4>{title}</h4>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
