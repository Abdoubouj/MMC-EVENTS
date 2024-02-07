import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import "./SpeakerDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSpeakers } from "../../features/speakerSlice";

const SpeakerDetails = () => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);

  useEffect(() => {
    dispatch(getSpeakers());
  }, [dispatch]);

  const { id } = useParams();
  const [currentSpeakerId, setCurrentSpeakerId] = useState(parseInt(id));

  const speaker = useMemo(
    () =>
      speakers.find(
        (speaker) => speaker.speakerId === parseInt(currentSpeakerId)
      ),
    [currentSpeakerId]
  );

  const handleOnClickSpeaker = (s) => {
    setCurrentSpeakerId(s.speakerId);
  };

  return (
    <div className="speaker-details">
      <div className="speaker-details-left">
        <div className="speaker-details-left-cover">
          <div className="speaker-details-left-cover-img">
            <img src={speaker?.photo} alt="#" />
            <h1>
              {speaker?.nom} {speaker?.prenom}
            </h1>
          </div>
          <div className="speaker-details-left-profile"></div>
        </div>

        <div className="speaker-info">
          <div className="speaker-details-long-description">
            {speaker.biography}
          </div>
        </div>
      </div>
      <div className="speaker-details-right">
        <div className="speaker-details-right-container">
          {speakers
            .filter((e) => e.speakerId !== parseInt(currentSpeakerId))
            .map((s) => (
              <div className="speaker-details-list" key={s.speakerId}>
                <div className="speaker-details-list-cover">
                  <img src="https://wallpapershome.com/images/pages/pic_h/24779.jpg" />
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
                    {s.mct} {s.mvp}
                  </h4>
                  <p></p>
                  <p>
                    {s.biography.split(" ").slice(0, 8).join(" ")}{" "}
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
