import React, { useState } from "react";
import "./AdminEvents.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { events } from "../../data/events";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
const AdminEvents = () => {
  return (
    <div className="admin-events">
      <div className="top">
        <h1>Events</h1>
        <button className="add-event-btn">
          <AddCircleOutlineRoundedIcon /> Add new event
        </button>
      </div>

      <div className="bottom">
        <table className="event-table">
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
                  <img src={event.image} width={50} alt="" />
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
