import React, { useEffect, useRef, useState } from "react";
import "./AdminEvents.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// import { events } from "../../data/events";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import {
  deleteEvents,
  filter,
  getEvents,
  postEvents,
  updateEvents,
} from "../../features/eventSlice";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Loader from "../Loader/Loader";
const AdminEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  const status = useSelector((state) => state.event.eventsStatus);
  const [isUpdate, setIsUpdate] = useState(false);
  

  const [inputs, setInputs] = useState({
   
    title: "",
    picture: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [page, setPage] = useState(0);
  const navigateTo = useNavigate();
  const itemsPerPage = 6;
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!isUpdate) {
      dispatch(postEvents(inputs));
     
    } else {
      dispatch(updateEvents(inputs));
    }
    navigateTo("/admin/events");
  };
  const handleDelete = async (eventId) => {
    dispatch(deleteEvents(eventId));
    //alert("event deleted successfully ");
  };
  console.log(inputs);
  // console.log(postEvents());
  return (
    <div className="admin-events">
      <div
        class="modal fade"
        id="addEvent"
        tabindex="-1"
        aria-labelledby="addEventLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addEventLabel">
                add event
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="add-event-form" onSubmit={handleAddEvent}>
                <div className="field event-title">
                  <label htmlFor="event-title">event title</label>
                  <input
                    name="title"
                    value={inputs.title}
                    onChange={handleChange}
                    type="text"
                    placeholder="event title ..."
                  />
                </div>
                <div className="field event-photo">
                  <label htmlFor="event-photo">event photo</label>
                  <input
                    name="picture"
                    value={inputs.picture}
                    onChange={handleChange}
                    type="text"
                    placeholder="event photo ..."
                  />
                </div>
                <div className="field event-description">
                  <label htmlFor="event-description">event description</label>
                  <input
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    type="text"
                    placeholder="event description ..."
                  />
                </div>
                <div className="field event-start-date">
                  <label htmlFor="event-start-date">event start date</label>
                  <input
                    name="startDate"
                    value={inputs.startDate}
                    onChange={handleChange}
                    type="datetime-local"
                    placeholder="event start date ..."
                  />
                </div>
                <div className="field event-end-date">
                  <label htmlFor="event-end-date">event end date</label>
                  <input
                    name="endDate"
                    value={inputs.endDate}
                    onChange={handleChange}
                    type="datetime-local"
                    placeholder="event end date ..."
                  />
                </div>
                <div class="modal-footer" style={{ width: "100%" }}>
                  {isUpdate ? (
                    <button type="submit" class="btn btn-success p-3">
                      update event
                    </button>
                  ) : (
                    <button type="submit" class="btn btn-primary p-3">
                      add event
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="filters">
  <form className="row">
    <div className="m-1 col">
      <label htmlFor="form-label">
        titre
      </label>
        <input type="text" className="form-control" name="titre" onChange={(e)=>{dispatch(filter({titre:e.target.value}))}} />
    </div>
    <div className="m-1 col">
      <label htmlFor="form-label">
        start date
      </label>
        <input type="date" className="form-control" name="titre" onChange={(e)=>{dispatch(filter({titre:e.target.value}))}} />
    </div>
    <div className="m-1 col">
      <label htmlFor="form-label">
        end date
      </label>
        <input type="date" className="form-control" name="titre" onChange={(e)=>{dispatch(filter({titre:e.target.value}))}} />
    </div>
    <div className="col bg-dark">
        <button type="submit" className="btn btn-info">filter</button>
    </div>
  </form>
</div> */}
      <div className="top">
        <h1>Events</h1>
        <button
          onClick={() => {
            setInputs({
              title: "",
              picture: "",
              description: "",
              startDate: "",
              endDate: "",
            });
          }}
          className="add-event-btn"
          data-bs-toggle="modal"
          data-bs-target="#addEvent"
        >
          <AddCircleOutlineRoundedIcon /> Add new event
        </button>
      </div>
      {status === "loading" ? (
        <div className="spinner" style={{ textAlign: "center" }}>
          <Loader />
        </div>
      ) : (
        <div className="bottom">
          <table className="events-table">
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>Picture</th>
                <th>start date</th>
                <th>end date</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {typeof events === "object" &&
                events
                  ?.filter((item, index) => {
                    return (
                      (index >= page * itemsPerPage) &
                      (index < (page + 1) * itemsPerPage)
                    );
                  })
                  ?.map((event) => (
                    <tr key={event.eventID}>
                      <td>{event.eventID}</td>
                      <td>{event.title?.substring(0, 15)}...</td>
                      <td>
                        <img
                          src={
                            event.picture !== null
                              ? event.picture
                              : ""
                          }
                          width={50}
                          alt="pic"
                        />
                      </td>
                      <td>{event.startDate}</td>
                      <td>{event.endDate}</td>
                      <td>
                        <button
                          className="edit-btn"
                          onClick={() => {
                            setInputs(event);
                            setIsUpdate(true);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#addEvent"
                        >
                          <BorderColorRoundedIcon />
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => {
                            handleDelete(event?.eventID);
                          }}
                        >
                          <DeleteOutlineRoundedIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <ReactPaginate
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            activeClassName={"active"}
            onPageChange={(event) => setPage(event.selected)}
            pageCount={Math.ceil(
              typeof events === "object" && events.length / itemsPerPage
            )}
            breakLabel="..."
            previousLabel={<KeyboardArrowLeftRoundedIcon />}
            nextLabel={<KeyboardArrowRightRoundedIcon />}
          />
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
