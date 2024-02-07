import React, { useContext, useEffect } from "react";
import "./AdminDashboard.scss";
import mmcLogo from "../../assets/mmcLogo.svg";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import AdminEvents from "../AdminEvents/AdminEvents";
import AdminSpeakers from "../AdminSpeakers/AdminSpeakers";
import Users from "../Users/Users";
import AdminPartners from "../AdminPartners/AdminPartners";
import { useLocation, useNavigate } from "react-router-dom";
import Sessions from "../Sessions/Sessions";
import { UseContext } from "../hooks/UseContext";
import { Button } from "react-bootstrap";
import { auth } from "../../features/firebaseAuth";
const AdminDashboard = () => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const path = location.pathname;

  const { isAdmin, setIsAdminToggle } = useContext(UseContext);
  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      setIsAdminToggle(false); 
      navigateTo("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  useEffect(() => {
    if (!isAdmin) {
      

      navigateTo("/login");
    } else {
      // navigateTo("/adminDashboard");
       
    }
  }, [isAdmin]);
  return (
    <div className="admin-dashboard">
      <aside className="dashboard-left-sidebare">
        <div className="logo">
          <img className="logo-img" src={mmcLogo} width={50} alt="#" />
          <h1 className="logo-title">Morocco Microsoft Community</h1>
        </div>
        <ul className="dashboard-menu">
          <li className="admin-nav-link">
            <NavLink to="/adminDashboard">
              <GridViewRoundedIcon /> Dashboard
            </NavLink>
          </li>
          <li className="admin-nav-link">
            <NavLink to="/admin/events">
              <ConfirmationNumberRoundedIcon /> Events
            </NavLink>
          </li>
          <li className="admin-nav-link">
            <NavLink to="/admin/sessions">
              <CalendarMonthRoundedIcon /> sessions
            </NavLink>
          </li>
          <li className="admin-nav-link">
            <NavLink to="/admin/users">
              <PeopleRoundedIcon /> Users
            </NavLink>
          </li>
          <li className="admin-nav-link">
            <NavLink to="/admin/speakers">
              <RecordVoiceOverRoundedIcon /> Speakers
            </NavLink>
          </li>
          <li className="admin-nav-link">
            <NavLink to="/admin/partners">
              <HandshakeRoundedIcon /> Partners
            </NavLink>
          </li>
          <li className="admin-nav-link">
            <button onClick={handleLogout}>
              <LogoutRoundedIcon /> Logout
            </button>
          </li>
        </ul>
      </aside>
      <div className="dashboard-right">
        <header className="admin-header">
          <div className="admin-search-box">
            <input
              type="text"
              placeholder="search for any ..."
              className="admin-search-input"
            />
            <div className="admin-search-icon">
              <SearchRoundedIcon />
            </div>
          </div>
          <Stack direction="row">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
        </header>
        <main>
          <Routes>
            <Route exact path="/adminDashboard" element={<Dashboard />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/sessions" element={<Sessions />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/speakers" element={<AdminSpeakers />} />
            <Route path="/admin/partners" element={<AdminPartners />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
