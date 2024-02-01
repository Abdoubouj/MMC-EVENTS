import React, { useEffect, useState } from "react";
import "./AdminEvents.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// import { events } from "../../data/events";
import {useSelector,useDispatch} from "react-redux"
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { getEvents } from "../../features/eventSlice";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
const AdminEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state)=>state.event.events);
  useEffect(()=>{
    dispatch(getEvents());
  },[dispatch])
  return (
    <div className="admin-events">
   <div class="modal fade" id="addEvent" tabindex="-1" aria-labelledby="addEventLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addEventLabel">add event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form className="add-event-form">
            <div className="field event-title">
                <label htmlFor="event-title">event title</label>
                <input type="text" placeholder="event title ..." />
            </div>
            <div className="field event-adresse">
                <label htmlFor="event-adresse">event adresse</label>
                <input type="text" placeholder="event adresse ..." />
            </div>
            <div className="field event-city">
                <label htmlFor="event-city">event city</label>
                <input type="text" placeholder="event city ..." />
            </div>
            <div className="field event-category">
                <label htmlFor="event-category">event category</label>
                <input type="text" placeholder="ex: remote or face to face " />
            </div>
            <div className="field event-image">
                <label htmlFor="event-image">event image</label>
                <input type="text" placeholder="event image ..." />
            </div>
            <div className="field event-start-date">
                <label htmlFor="event-start-date">event start date</label>
                <input type="date" placeholder="event start date ..." />
            </div>
            <div className="field event-end-date">
                <label htmlFor="event-end-date">event end date</label>
                <input type="date" placeholder="event end date ..." />
            </div>
        </form>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary p-3">add event</button>
      </div>
    </div>
  </div>
</div>
      <div className="top">
        <h1>Events</h1>
        <button className="add-event-btn" data-bs-toggle="modal" data-bs-target="#addEvent">
          <AddCircleOutlineRoundedIcon /> Add new event
        </button>
      </div>
      <div className="bottom">
        <table className="events-table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>adresse</th>
              <th>city</th>
              <th>category</th>
              <th>image</th>
              <th>start date</th>
              <th>end date</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.adresse}</td>
                <td>{event.city}</td>
                <td>{event.category}</td>
                <td>
                  {/* <img src={event.image} width={50} alt="" /> */}
                  {event.placesCount}
                </td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
                <td>
                  <button className="edit-btn">
                    <BorderColorRoundedIcon />
                  </button>
                  <button className="delete-btn">
                    <DeleteOutlineRoundedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEvents;
