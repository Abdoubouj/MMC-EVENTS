import React from 'react'
import "./Dashboard.scss"
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Overview</h1>
      <div className="overview-items">
        <div className="overview-item">
          <div className="item-top">
            Events
          </div>
          <div className="item-bottom">
            <div className="count">1900</div>
            <div className="icon">
            <ConfirmationNumberRoundedIcon/>
            </div>
          </div>
        </div>
        <div className="overview-item">
          <div className="item-top">
            Users
          </div>
          <div className="item-bottom">
            <div className="count">150</div>
            <div className="icon">
            <PeopleRoundedIcon/>
            </div>
          </div>
        </div>
        <div className="overview-item">
          <div className="item-top">
            Speakers
          </div>
          <div className="item-bottom">
            <div className="count">5</div>
            <div className="icon">
            <RecordVoiceOverRoundedIcon/>
            </div>
          </div>
        </div>
       
        <div className="overview-item">
          <div className="item-top">
            Partners
          </div>
          <div className="item-bottom">
            <div className="count">14</div>
            <div className="icon">
            <HandshakeRoundedIcon/>
            </div>
          </div>
        </div>
      </div>
      <div className="last-events">
        <h1>Last Events</h1>
        <Link>see all</Link>
      </div>
    </div>
  )
}

export default Dashboard