import React from 'react'
import "./AdminDashboard.scss"
import mmcLogo from "../../assets/mmcLogo.svg"
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { NavLink , Routes,Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AdminEvents from '../AdminEvents/AdminEvents';
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
        <aside className="dashboard-left-sidebare">
           <div className="logo">
            <img className='logo-img' src={mmcLogo} width={50} alt="#" />
            <h1 className='logo-title'>Morocco Microsoft Community</h1>
           </div>
           <ul className="dashboard-menu">
                <li><NavLink to="/"><GridViewRoundedIcon/> Dashboard</NavLink></li>
                <li><NavLink to="/admin/events"><ConfirmationNumberRoundedIcon/> Events</NavLink></li>
                <li><NavLink to="/admin/users"><PeopleRoundedIcon/> Users</NavLink></li>
                <li><NavLink to="/admin/speakers"><RecordVoiceOverRoundedIcon/> Speakers</NavLink></li>
                <li><NavLink to="/admin/partners"><HandshakeRoundedIcon/> Partners</NavLink></li>
                <li><NavLink to="/admin/logout"><LogoutRoundedIcon/> Logout</NavLink></li>
           </ul>
        </aside>
        <div className="dashboard-right">
            <header className='admin-header'>
                <div className="admin-search-box">
                    <input type="text" placeholder='search for any ...' className='admin-search-input' />
                    <div className="admin-search-icon">
                      <SearchRoundedIcon/>
                    </div>
                </div>
                <Stack direction="row">
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Stack>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/admin/events" element={<AdminEvents/>}/>
                    <Route path="/admin/users" element="users"/>
                    <Route path="/admin/speakers" element="speakers"/>
                    <Route path="/admin/partners" element="partners"/>
                </Routes>
            </main>
        </div>
    </div>
  )
}

export default AdminDashboard