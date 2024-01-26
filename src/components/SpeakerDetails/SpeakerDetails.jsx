import React from "react";
import { useParams } from "react-router-dom";
import { speakers } from "../../data/speakers";
import Speakers from "../Speakers/Speakers";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import "./SpeakerDetails.scss";
const SpeakerDetails = () => {
  const { id } = useParams();

  const speaker = speakers.find((speaker) => speaker.id === parseInt(id));

  return (
    <>
      <div className="speaker-details">
        <div className="speaker-details-left">
          <img src={speaker.photo} alt="#" />
          <h1 className="speaker-info">{speaker?.nom}</h1>
          <div className="speaker-details-long-description">
            {speaker.longdescription}
          </div>
        </div>
        <div className="speaker-details-right">
          <div>
            {speakers.map((s) => (
              <div>
                <h1>{s.nom}</h1>
                <h1>{s.nom}</h1>
                <h1>{s.nom}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerDetails;
