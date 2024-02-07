import React, { useEffect, useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Loader from "../Loader/Loader";
import { deleteSessions, getSessions, postSessions } from "../../features/sessionSlice";
const Sessions = () => {
    const dispatch = useDispatch();
    const sessions = useSelector((state)=>state.session.sessions);
    const status = useSelector((state)=>state.session.sessionsStatus);
    const [page, setPage] = useState(0);
    const navigateTo = useNavigate();
    const itemsPerPage = 6;
    useEffect(()=>{
      dispatch(getSessions());
    },[dispatch]);
    const handleAddSession = (e)=>{
      e.preventDefault();
      const result =  dispatch(postSessions({title:"test",adresse:"test"}));
      navigateTo("/admin/sessions");
      console.log(result);
      // dispatch(getEvents())
    }
    const handleDelete = async (eventId) =>{
      await dispatch(deleteSessions(eventId));
      alert("session deleted successfully ")
    }
  return (
    <div className="admin-events">
    <div class="modal fade" id="addSession" tabindex="-1" aria-labelledby="addSessionLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h1 class="modal-title fs-5" id="addSessionLabel">add session</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
         <form className="add-session-form">
             <div className="field session-title">
                 <label htmlFor="session-title">event title</label>
                 <input type="text" placeholder="session title ..." />
             </div>
             <div className="field session-image">
                 <label htmlFor="session-image">event image</label>
                 <input type="text" placeholder="session image ..." />
             </div>
             <div className="field session-description">
                 <label htmlFor="session-description">session description</label>
                 <input type="text" placeholder="session description ..." />
             </div>
             <div className="field session">
                 <label htmlFor="session">session date</label>
                 <input type="date" placeholder="session date ..." />
             </div>
             <div className="field event-end-date">
                 <label htmlFor="event-end-date">event end date</label>
                 <input type="date" placeholder="event end date ..." />
             </div>
       <div class="modal-footer" style={{width:"100%"}}>
         {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
         <button type="submit" class="btn btn-primary p-3">add session</button>
       </div>
         </form>
       </div>
     </div>
   </div>
 </div>
       <div className="top">
         <h1>Sessions</h1>
         <button className="add-event-btn" data-bs-toggle="modal" data-bs-target="#addSession">
           <AddCircleOutlineRoundedIcon /> Add new session
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
               <th>session title</th>
               <th>adresse</th>
               <th>image</th>
               <th>date</th>
               <th>eventId</th>
               <th>actions</th>
             </tr>
           </thead>
           <tbody>
             {typeof sessions === "object" && sessions?.filter((item, index) => {
          return (index >= page * itemsPerPage) & (index < (page + 1) * itemsPerPage);
         })?.map((session) => (
               <tr key={session.id}>
                 <td>{session.sessionId}</td>
                 <td>{session.titreSession?.substring(0,15)}...</td>
                 <td>{session.adresse}</td>
                 <td>
                    <img src="https://picsum.photos/200/300" width={50} alt="###" />
                 </td>
                 <td>{session.dateSession}</td>
                 <td>{session.evenementId}</td>
                 <td>
                   <button className="edit-btn">
                     <BorderColorRoundedIcon />
                   </button>
                   <button className="delete-btn" onClick={()=>{handleDelete(session?.id)}}>
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
   pageCount={Math.ceil(typeof sessions === "object" && sessions.length / itemsPerPage)}
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
  )
}

export default Sessions