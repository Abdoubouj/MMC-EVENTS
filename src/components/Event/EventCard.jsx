import React from "react";
import "./EventCard.scss"
const EventCard = ({event}) => {
  return (
    <div className="event-item">
      <img src={event.image} alt="" />
    </div>
  );
};

export default EventCard;
