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

const AdminSpeakers = () => {
  const [page, setPage] = useState(0);

  const [isUpdate, setIsUpdate] = useState(false);
  const [newSpeaker, setNewSpeaker] = useState({});
  // const callback = (NewSpeaker, Errors) => {
  //   setNewSpeaker(NewSpeaker);
  //   setErrors(Errors);
  // };
  // const { handleInputChange, validateData } = ValidateForm(
  //   newSpeaker,
  //   callback
  // );
  const itemsPerPage = 8;
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);
  const status = useSelector((state) => state.speaker.speakersStatus);
  const error = useSelector((state) => state.speaker.speakersError);

  useEffect(() => {
    dispatch(getSpeakers());
  }, [dispatch]);

  const handleDeleteSpeaker = (speakerId) => {
    dispatch(DeleteSpeaker(speakerId));
  };

  const handleInputChange = (fieldName, value) => {
    setNewSpeaker((newSpeaker) => ({
      ...newSpeaker,
      [fieldName]: value,
    }));
  };
  const handleUpdateSpeaker = (speaker) => {
    setIsUpdate(true);
    setNewSpeaker(speaker);
  };
  const handleAddNewSpeaker = (e) => {
    e.preventDefault();
    setIsUpdate(false);
    if (!isUpdate) {
      dispatch(AddNewSpeaker(newSpeaker));
    } else {
      console.log(newSpeaker);
      dispatch(UpdateSpeaker(newSpeaker));
      alert("Speaker has been updated Successfully");
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
                <div className="field First Name">
                  <label htmlFor="event-title">Image</label>
                  <input
                    id="image"
                    type="file"
                    onChange={(e) => handleInputChange("image", e.target.value)}
                  />
                </div>
                <div className="field First Name">
                  <label htmlFor="event-title">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={newSpeaker.firstName}
                    placeholder="First Name ..."
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                  />
                </div>
                <div className="field First Name">
                  <label htmlFor="event-title">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={newSpeaker.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    placeholder="Last Name ..."
                  />
                </div>
                <div className="field event-adresse">
                  <label htmlFor="MCT">MCT</label>
                  <select
                    id="MCT"
                    onChange={(e) =>
                      handleInputChange(
                        "MCT",
                        e.target.value === "true" ? true : false
                      )
                    }
                    name="MCT"
                    value={newSpeaker.MCT}
                  >
                    <option disabled>Select MCT...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="field event-adresse">
                  <label htmlFor="MVP">MVP</label>
                  <select
                    id="MVP"
                    onChange={(e) =>
                      handleInputChange(
                        "MVP",
                        e.target.value === "true" ? true : false
                      )
                    }
                    name="MVP"
                    value={newSpeaker.MVP}
                  >
                    <option disabled>Select MVP...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="field event-city">
                  <label htmlFor="Website">Website</label>
                  <input
                    type="text"
                    id="Website"
                    value={newSpeaker.Website}
                    onChange={(e) =>
                      handleInputChange("Website", e.target.value)
                    }
                    placeholder="URL Website ..."
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="twitterLink">Twitter Link</label>
                  <input
                    type="text"
                    id="twitterLink"
                    value={newSpeaker.twitterLink}
                    onChange={(e) =>
                      handleInputChange("twitterLink", e.target.value)
                    }
                    placeholder="Twitter Link... "
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="instagramLink">Instagram Link</label>
                  <input
                    type="text"
                    id="instagramLink"
                    value={newSpeaker.instagramLink}
                    onChange={(e) =>
                      handleInputChange("instagramLink", e.target.value)
                    }
                    placeholder="Instagram Link... "
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="linkedInLink">Linkedin Link</label>
                  <input
                    type="text"
                    id="linkedInLink"
                    value={newSpeaker.linkedInLink}
                    onChange={(e) =>
                      handleInputChange("linkedInLink", e.target.value)
                    }
                    placeholder="Linkedin Link... "
                  />
                </div>
                <div className="field event-category">
                  <label htmlFor="linkedInLink">Biography</label>
                  <input
                    type="textarea"
                    id="bio"
                    value={newSpeaker.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    placeholder="Bio... "
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button
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
                <th>Image</th>
                <th>MCT</th>
                <th>MVP</th>
                {/* <th>Website</th>
                <th>twitterLink</th>
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
                  <tr key={speaker.id}>
                    <td>{speaker.id}</td>
                    <td>{speaker.firstName}</td>
                    <td>{speaker.lastName}</td>
                    <td>
                      <img
                        width={"50px"}
                        src={speaker.image}
                        alt={speaker.image}
                      />
                    </td>
                    <td>{speaker.MCT === true ? "Yes" : "No"} </td>
                    <td>{speaker.MVP === true ? "Yes" : "No"} </td>
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
                        onClick={() => handleDeleteSpeaker(speaker.id)}
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
