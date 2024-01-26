import React from "react";
import "./Speakers.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { Link, NavLink } from "react-router-dom";
import { speakers } from "../../data/speakers";




const Speakers = () => {

  return (
    <>
      <div className="speakers-title">
        <h1>Our Speakers </h1>
      </div>
      <div className="speakers-container">
        {speakers.map((speaker) => (
          <div className="speaker">
            <div className="image">
              <a href="#">
                <img
                  src={speaker.photo}
                  alt={speaker.nom + " " + speaker.prenom}
                />
              </a>
            </div>
            <div className="speakerInfo">
              <Link to={`/speakers/${speaker.id}`}>
                <h2> {speaker.nom + " " + speaker.prenom} </h2>
              </Link>
              <p>{speaker.MVP + " " + speaker.MCT}</p>
              <h5>About</h5>
              <p> {speaker.Biography}</p>
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
