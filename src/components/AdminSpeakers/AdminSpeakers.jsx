import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpeakers } from '../../features/speakerSlice';
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
 
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Loader from "../Loader/Loader";

const AdminSpeakers = () => {

 const [page, setPage] = useState(0);
 const itemsPerPage = 8;
 
	const dispatch= useDispatch();
	const speakers = useSelector((state)=>state.speaker.speakers)
	const status = useSelector((state) => state.speaker.speakersStatus);
	const error = useSelector((state) => state.speaker.speakersError);


	useEffect(()=>{
		dispatch(getSpeakers())

	},[dispatch])

	 
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
                    <input
                      type="text"
                      placeholder="ex: remote or face to face "
                    />
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
                <button type="button" class="btn btn-primary p-3">
                  add event
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          <h1>Speakers</h1>
          <button
            className="add-event-btn"
            data-bs-toggle="modal"
            data-bs-target="#addEvent"
          >
            <AddCircleOutlineRoundedIcon /> Add new Speakers
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
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>MCT</th>
                  <th>MVP</th>
                  <th>Image</th>
                  <th>Website</th>
                   
                  <th>twitterLink</th>
                  <th>facebookLink</th>
                  <th>instagramLink</th>
                </tr>
              </thead>
              <tbody>
                {speakers
                  .filter((item, index) => {
                    return (
                      (index >= page * itemsPerPage) &
                      (index < (page + 1) * itemsPerPage)
                    );
                  })
                  .map((speaker) => (
                    <tr key={speaker.id}>
                      <td>{speaker.id}</td>
                      <td>{speaker.lastName}</td>
                      <td>{speaker.fisrtName}</td>
                      <td>{speaker.MCT === true ? "Oui" : "Non"} </td>
                      <td>{speaker.MVP === true ? "Oui" : "Non"} </td>
                      <td>{speaker.Website}</td>
                      
                      <td>{speaker.twitterLink}</td>
                      <td>{speaker.facebookLink}</td>
                      <td>{speaker.instagramLink}</td>

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
            <ReactPaginate
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              activeClassName={"active"}
              onPageChange={(event) => setPage(event.selected)}
              pageCount={Math.ceil(speakers.length / itemsPerPage)}
              breakLabel="..."
              previousLabel={<KeyboardArrowLeftRoundedIcon />}
              nextLabel={<KeyboardArrowRightRoundedIcon />}
            />
          </div>
        )}
      </div>
    );
}

export default AdminSpeakers
