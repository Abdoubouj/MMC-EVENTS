import React, { useEffect, useRef, useState } from "react";
import "./AdminEvents.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// import { events } from "../../data/events";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { deleteEvents, getEvents, postEvents, updateEvents } from "../../features/eventSlice";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Loader from "../Loader/Loader";
const AdminEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state)=>state.event.events);
  const status = useSelector((state)=>state.event.eventsStatus);
  const [isUpdate ,setIsUpdate] = useState(false);
  const modalRef = useRef();
  const [inputs , setInputs] = useState({
    title:"",
image:"",
description:"",
startDate:"",
endDate:""
  });
  const [page, setPage] = useState(0);
  const navigateTo = useNavigate();
  const itemsPerPage = 6;
  useEffect(()=>{
    dispatch(getEvents());
  },[dispatch]);
  const handleChange = (e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value});
  }
  const handleAddEvent = (e)=>{
    if(!isUpdate){
      e.preventDefault();
      dispatch(postEvents(inputs));
    }else{
      e.preventDefault();
      dispatch(updateEvents(inputs));
    }
    modalRef.current.style.display = "none"
    navigateTo("/admin/events");
  }
  const handleDelete = async (eventId) =>{
    await dispatch(deleteEvents(eventId));
    alert("event deleted successfully ")
  }
  console.log(inputs);
  // console.log(postEvents());
  return (
    <div className="admin-events">
   <div class="modal fade"  id="addEvent" tabindex="-1" aria-labelledby="addEventLabel" aria-hidden="true" ref={modalRef}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addEventLabel">add event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form className="add-event-form" onSubmit={handleAddEvent}>
            <div className="field event-title">
                <label htmlFor="event-title">event title</label>
                <input name="title" value={inputs.title} onChange={handleChange} type="text" placeholder="event title ..." />
            </div>
            <div className="field event-image">
                <label htmlFor="event-image">event image</label>
                <input name="image" value={inputs.image} onChange={handleChange} type="text" placeholder="event image ..." />
            </div>
            <div className="field event-description">
                <label htmlFor="event-description">event description</label>
                <input name="description" value={inputs.description} onChange={handleChange} type="text" placeholder="event description ..." />
            </div>
            <div className="field event-start-date">
                <label htmlFor="event-start-date">event start date</label>
                <input name="startDate" value={inputs.startDate} onChange={handleChange} type="datetime-local" placeholder="event start date ..." />
            </div>
            <div className="field event-end-date">
                <label htmlFor="event-end-date">event end date</label>
                <input name="endDate" value={inputs.endDate} onChange={handleChange} type="datetime-local" placeholder="event end date ..." />
            </div>
      <div class="modal-footer" style={{width:"100%"}}>
        {isUpdate ?
        <button type="submit" class="btn btn-success p-3">update event</button>:
        <button type="submit" class="btn btn-primary p-3">add event</button>
      }
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
      <div className="top">
        <h1>Events</h1>
        <button onClick={()=>{setInputs({title:"",image:"",description:"",startDate:"",endDate:""})}} className="add-event-btn" data-bs-toggle="modal" data-bs-target="#addEvent">
          <AddCircleOutlineRoundedIcon /> Add new event
        </button>
      </div>
      {status === "loading" ?
      <div className="spinner" style={{textAlign:"center"}}>
      <Loader/>
      </div>
      :
      <div className="bottom">
        <table className="events-table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>image</th>
              <th>start date</th>
              <th>end date</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {typeof events === "object" && events?.filter((item, index) => {
         return (index >= page * itemsPerPage) & (index < (page + 1) * itemsPerPage);
        })?.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title?.substring(0,15)}...</td>
                <td>
                  <img src={event.image} width={50} alt="" />
                </td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
                <td>
                  <button className="edit-btn" onClick={()=>{setInputs(event); setIsUpdate(true)}} data-bs-toggle="modal" data-bs-target="#addEvent">
                    <BorderColorRoundedIcon />
                  </button>
                  <button className="delete-btn" onClick={()=>{handleDelete(event?.id)}}>
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
  pageCount={Math.ceil(typeof events === "object" && events.length / itemsPerPage)}
  breakLabel="..."
  previousLabel={
    <KeyboardArrowLeftRoundedIcon/>
  }
  nextLabel={
    <KeyboardArrowRightRoundedIcon/>
  }
/>
      </div>
}
</div>
  );
};

export default AdminEvents;
