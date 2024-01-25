import React from "react";
import "./EventCard.scss"
const EventCard = ({event}) => {
  return (
    <div className="event-item">
      <img src={event.image} alt="" />
      <div className="event-info">
      <h2 className="event-title">{event.title}</h2>
      <h3 className="event-city">{event.adresse},{event.city}</h3>
      </div>
    </div>
  );
};

export default EventCard;
