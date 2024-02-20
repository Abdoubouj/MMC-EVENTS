import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewSpeaker,
  DeleteSpeaker,
  UpdateSpeaker,
  getSpeakers,
} from "../../features/speakerSlice";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Loader from "../Loader/Loader";
import { getUsers, getUsersOnly } from "../../features/userSlice";

const AdminSpeakers = () => {
  const [page, setPage] = useState(0);

  const [isUpdate, setIsUpdate] = useState(false);
  const [UsersToSelect, setUsersToSelect] = useState([]);
  const [newSpeaker, setNewSpeaker] = useState({
    picture: "",
    mct: false,
    mvp: false,
    bioGraphy: "",
    facebook: "",
    instagram: "",
    linkedIn: "",
    twitter: "",
    website: "",
  });
  const [Users, setUsers] = useState([]);

  const itemsPerPage = 8;
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);
  const userOnly = useSelector((state) => state.user.userOnly);
  const status = useSelector((state) => state.speaker.speakersStatus);
  const error = useSelector((state) => state.speaker.speakersError);

  useEffect(() => {
    dispatch(getSpeakers());
    dispatch(getUsersOnly());
     
  }, [dispatch, isUpdate]);

  const handleDeleteSpeaker = (speakerID) => {
    dispatch(DeleteSpeaker(speakerID));
  };

  const handleInputChange = (fieldName, value) => {
    setNewSpeaker((newSpeaker) => ({
      ...newSpeaker,
      [fieldName]: value,
    }));
  };
  const handleCleanUserFormSelected = (selecteUserd) => {
    setUsers([
      ...userOnly.filter((user) => user.UserID !== selecteUserd.userID),
    ]);
  };
  const handleReloadUsers = () => {
    dispatch(getUsersOnly());
    setUsers(userOnly);
  };
  const handleUpdateSpeaker = (speaker) => {
    setIsUpdate(true);
    setNewSpeaker(speaker);
  };
  const handleAddNewSpeaker = (e) => {
    e.preventDefault();
    setIsUpdate(false);
    if (!isUpdate) {
      dispatch(AddNewSpeaker(newSpeaker)).then(()=>dispatch(getSpeakers()));
      handleCleanUserFormSelected(newSpeaker.speakerID);
    } else {
      console.log(newSpeaker);
      dispatch(UpdateSpeaker(newSpeaker)).then(()=>dispatch(getSpeakers()));
      if (status === "succeeded") {
        setIsUpdate(false);
      }
    }
  };

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="admin-events">
      <div
        className="modal fade"
        id="addEvent"
        tabIndex="-1"
        aria-labelledby="addEventLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addEventLabel">
                add Speaker
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="add-event-form">
                <div className="field event-adresse">
                  <label htmlFor="mct">Select The User</label>
                  <select
                    onChange={(e) =>
                      handleInputChange("speakerID", e.target.value)
                    }
                    value={newSpeaker.speakerID}
                  >
                    <option selected disabled>
                      Select a user
                    </option>
                    {Users.map((user) => (
                      <option value={user.userID} key={user.userID}>
                        {user.firstName} {user.lastName}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <p></p>
                <div className="field event-adresse">
                  <label htmlFor="mct">MCT</label>
                  <select
                    id="mct"
                    onChange={(e) =>
                      handleInputChange(
                        "mct",
                        e.target.value === "true" ? true : false
                      )
                    }
                    name="mct"
                    value={newSpeaker.mct}
                  >
                    <option disabled>Select MCT...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="field event-adresse">
                  <label htmlFor="mvp">MVP</label>
                  <select
                    id="mvp"
                    onChange={(e) =>
                      handleInputChange(
                        "mvp",
                        e.target.value === "true" ? true : false
                      )
                    }
                    name="mvp"
                    value={newSpeaker.mvp}
                  >
                    <option disabled>Select MVP...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="field event-city">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    value={newSpeaker.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    placeholder="URL Website ..."
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="twitter">Twitter Link</label>
                  <input
                    type="text"
                    id="twitter"
                    value={newSpeaker.twitter}
                    onChange={(e) =>
                      handleInputChange("twitter", e.target.value)
                    }
                    placeholder="Twitter Link... "
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="instagram">Instagram Link</label>
                  <input
                    type="text"
                    id="instagram"
                    value={newSpeaker.instagram}
                    onChange={(e) =>
                      handleInputChange("instagram", e.target.value)
                    }
                    placeholder="Instagram Link... "
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="linkedIn">Linkedin Link</label>
                  <input
                    type="text"
                    id="linkedIn"
                    value={newSpeaker.linkedIn}
                    onChange={(e) =>
                      handleInputChange("linkedIn", e.target.value)
                    }
                    placeholder="Linkedin Link... "
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="facebook">facebook Link</label>
                  <input
                    type="text"
                    id="facebook"
                    value={newSpeaker.facebook}
                    onChange={(e) =>
                      handleInputChange("facebook", e.target.value)
                    }
                    placeholder="Facebook Link... "
                  />
                </div>
                <div className="field First Name">
                  <label htmlFor="picture">Picture</label>
                  <input
                    id="picture"
                    type="text"
                    value={newSpeaker.picture}
                    onChange={(e) =>
                      handleInputChange("picture", e.target.value)
                    }
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="biography">Biography</label>
                  <input
                    type="text"
                    id="biography"
                    value={newSpeaker.biography}
                    onChange={(e) =>
                      handleInputChange("biography", e.target.value)
                    }
                    placeholder="Bio... "
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                data-bs-toggle="modal"
                data-bs-target="#addEvent"
                onClick={handleAddNewSpeaker}
                type="button"
                className="btn btn-primary p-3"
              >
                {isUpdate === false ? "Add new Speaker" : "Update Speaker"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <h1>Speakers</h1>
        <button
          onClick={handleReloadUsers}
          className="add-event-btn"
          data-bs-toggle="modal"
          data-bs-target="#addEvent"
        >
          <AddCircleOutlineRoundedIcon /> Add new Speaker
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
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Picture</th>
                <th>MCT</th>
                <th>MVP</th>
                <th>Website</th>
                {/* <th>twitterLink</th>
                <th>facebookLink</th>
                <th>instagramLink</th> */}
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
                  <tr key={speaker.speakerID}>
                    <td>{speaker.speakerID}</td>
                    <td>{speaker.lastName}</td>
                    <td>{speaker.firstName}</td>
                    <td>{speaker.lastName}</td>
                    <td>{speaker.speakerEmail}</td>
                    <td>
                      <img
                        width={"50px"}
                        src={speaker.picture}
                        alt={speaker.picture}
                      />
                    </td>
                    <td>{speaker.mct === true ? "Yes" : "No"} </td>
                    <td>{speaker.mvp === true ? "Yes" : "No"} </td>
                    {/* <td>{speaker.Website}</td>
                    <td>{speaker.twitterLink}</td>
                    <td>{speaker.linkedIn}</td>
                    <td>{speaker.instagramLink}</td> */}
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#addEvent"
                        className="edit-btn"
                        onClick={() => handleUpdateSpeaker(speaker)}
                      >
                        <BorderColorRoundedIcon />
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteSpeaker(speaker.speakerID)}
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
            pageCount={Math.ceil(speakers.length / itemsPerPage)}
            breakLabel="..."
            previousLabel={<KeyboardArrowLeftRoundedIcon />}
            nextLabel={<KeyboardArrowRightRoundedIcon />}
          />
        </div>
      )}
    </div>
  );
};

export default AdminSpeakers;
