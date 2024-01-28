import React from 'react'
import "./AdminDashboard.scss"
import mmcLogo from "../../assets/mmcLogo.svg"
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
        <aside className="dashboard-sidebare">
           <div className="logo">
            <img className='logo-img' src={mmcLogo} width={90} alt="#" />
            <h1 className='logo-title'>Morocco Microsoft Community</h1>
           </div>
           <ul className="dashboard-menu">
                <li><a href="#"><GridViewRoundedIcon/> Dashboard</a></li>
                <li><a href="#"><ConfirmationNumberRoundedIcon/> Events</a></li>
                <li><a href="#"><PeopleRoundedIcon/> Users</a></li>
                <li><a href="#"><RecordVoiceOverRoundedIcon/> Speakers</a></li>
                <li><a href="#"><HandshakeRoundedIcon/> Partners</a></li>
                <li><a href="#"><LogoutRoundedIcon/> Logout</a></li>
           </ul>
        </aside>
    </div>
  )
}

export default AdminDashboard