import React, { useState, useMemo } from "react";
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
  const [currentSpeakerId, setCurrentSpeakerId] = useState(parseInt(id));

  const speaker = useMemo(
    () => speakers.find((speaker) => speaker.id === parseInt(currentSpeakerId)),
    [currentSpeakerId]
  );

  const handleOnClickSpeaker = (s) => {
    
      setCurrentSpeakerId(s.id);
      console.log('====================================');
      console.log(s.id,"eee");
      console.log('====================================');
    
  }; // No dependencies needed for this useMemo

  return (
    <div className="speaker-details">
      <div className="speaker-details-left">
        <img src={speaker?.photo} alt="#" />
        <h1 className="speaker-info">{speaker?.nom}</h1>
        <div className="speaker-details-long-description">
          {speaker?.longdescription}
        </div>
      </div>
      <div className="speaker-details-right">
        <div className="speaker-details-right-container">
          {speakers
            .filter((e) => e.id !== parseInt(currentSpeakerId))
            .map((s) => (
              <div className="speaker-details-list" key={s.id}>
                <div className="speaker-details-list-cover">
                  <img src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/154186/Originals/dotnet-la-gi.jpg" />
                  <div className="speaker-details-list-image">
                    <img
                      onClick={() => handleOnClickSpeaker(s)}
                      src={s.photo}
                      alt={`${s.nom} ${s.prenom}`}
                    />
                  </div>
                </div>
                <div className="speaker-details-list-info">
                  <h1 onClick={() => handleOnClickSpeaker(s)}>
                    {s.nom} {s.prenom}
                  </h1>
                  <h4>
                    {s.MCT} {s.MVP}
                  </h4>
                  <p></p>
                  <p>
                    {s.Biography.split(" ").slice(0, 8).join(" ")}{" "}
                    <a href="#" onClick={() => handleOnClickSpeaker(s)}>
                      read more
                    </a>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
