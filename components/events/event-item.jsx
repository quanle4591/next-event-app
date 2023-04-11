//import Image from "next/image";
import styles from "./event-item.module.css";

import Button from "../ui/button";
import DateIcon from "../ui/date-icon";
import AddressIcon from "../ui/address-icon";
import ArrowRightIcon from "../ui/arrow-right-icon";

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
          <div className={styles.date}>
            <DateIcon />
            <time>
              {humanReadableDate}
            </time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>
              {location}
            </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
