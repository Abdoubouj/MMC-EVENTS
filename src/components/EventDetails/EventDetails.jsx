import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { events } from '../../data/events';
import { dateFormat } from "../../Helpers";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./EventDetails.scss";
import EventPartners from "../EventPartners/EventPartners";
import { getEventById, getEvents } from "../../features/eventSlice";
import { getSessionsByEvent } from "../../features/sessionSlice";
const EventDetails = () => {
  const { id } = useParams();
  // const event  = events.find((e)=> e.id === parseInt(id));
  const event = useSelector((state) => state.event.singleEvent);
  const events = useSelector((state) =>
    state.event.events.filter((e) => e.evenementId !== event?.evenementId)
  );
  const eventSessions = useSelector((state) => state.session.sessionsEvent);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getEventById(parseInt(id)));
    dispatch(getEvents());
    dispatch(getSessionsByEvent(parseInt(id)));
  }, [dispatch, id]);
  return (
    <div className="event-details">
      <main className="event-details-left">
        <h1 className="event-title">{event?.title}</h1>
        <img src={event.picture} className="event-image" alt="#" />
        <div className="meta-info">
          {/* <p className='event-adresse'>{event?.adresse},{event?.city}</p> */}
          <p className="event-date">
            <span>{dateFormat(event?.startDate)}</span>
            <span>/</span>
            <span>{dateFormat(event.endDate)}</span>
          </p>
        </div>
        <div className="event-description">
          <p>{event.description}</p>
        </div>
        <button className="enroll-btn">
          <AdsClickRoundedIcon /> Enroll Now
        </button>
        <div className="event-partners">
          <h1 className="partners-heading">event Partners</h1>
          {/* <EventPartners partners={event.partners}/> */}
        </div>
        <div className="sessions">
          <h4>sessions</h4>
          <div className="d-flex gap-3">
            {eventSessions.map((session) => (
              <div
                className="card"
                style={{ width: "200px" }}
                key={session.sessionId}
              >
                <img src={session.photo} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{session.titreSession}</h5>
                  <p className="card-text">{session.adresse}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <aside className="event-details-right">
        <div className="recommended-events">
          <h3>Recommended Events</h3>
          <div className="recommended-events-items">
            {events?.map((event) => (
              <div className="recommended-event-item" key={event.evenementId}>
                <div className="recommended-event-img">
                  <img src={event?.picture} alt="#" />
                </div>
                <div className="recommended-event-info">
                  <h5>{event?.title}</h5>
                  {/* <p>{event?.adresse},{event?.city}</p> */}
                  <Link to={`/events/${event.eventID}`}>
                    Read more <KeyboardDoubleArrowRightIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default EventDetails;
