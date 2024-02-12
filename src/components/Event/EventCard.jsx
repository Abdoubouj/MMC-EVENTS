import React from "react";
import "./EventCard.scss"
import { Link } from "react-router-dom";
const EventCard = ({event}) => {
  return (
    <Link to={`/events/${event.eventID}`} className="event-item">
      <img src={event.picture} alt="" />
      <div className="event-info">
        <h2 className="event-title">{event.title}</h2>
        {/* <h3 className="event-city">{event.description}</h3> */}
      </div>
    </Link>
  );
};

export default EventCard;
