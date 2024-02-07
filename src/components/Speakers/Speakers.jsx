import React, { useEffect } from "react";
import "./Speakers.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpeakers } from "../../features/speakerSlice";

const Speakers = () => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);

  useEffect(() => {
    dispatch(getSpeakers());
  }, [dispatch]);
  console.log("====================================");
  console.log(speakers);
  console.log("====================================");
  return (
    <>
      <div className="speakers-title">
        <h1>Our Speakers </h1>
      </div>
      <div className="speakers-container">
        {speakers.map((speaker) => (
          <div className="speaker">
            <div className="image">
              <Link to={`/speakers/${speaker.speakerId}`}>
                <img
                  src={speaker.photo}
                  alt={speaker.nom + " " + speaker.prenom}
                />
              </Link>
            </div>
            <div className="speakerInfo">
              <Link to={`/speakers/${speaker.speakerId}`}>
                <h2> {speaker.nom + " " + speaker.prenom} </h2>
              </Link>
              <h4>
                <h5>MVP: {speaker.mvp ? "Oui" : "Non"}</h5>

                <h5>MCT:{speaker.mct ? "Oui" : "Non"}</h5>
              </h4>

              <p> {speaker.biography}</p>
            </div>
            <div className="userSocialMedia">
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <XIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RssFeedIcon fontSize="large" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Speakers;
