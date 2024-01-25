import React from "react";
import "./Header.scss";
import mmcLogo from "../../assets/mmcLogo.svg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <img src={mmcLogo} width={90} alt="app-logo" />
          </div>
          <div className="menu">
            <ul className="nav-menu">
              <li className="menu-item">
                <NavLink className="menu-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/">
                  Events
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/speakers">
                  Speakers
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-left">
            <div className="search-box">
              <input type="search" placeholder="search for Event ..." />
              <div className="search-icon">
                <SearchRoundedIcon />
              </div>
            </div>
            <div className="account-box">
              <div className="account-icon">
                <PersonOutlineIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <h1>WELCOME TO MORROCO <strong>MICROSOFT</strong> COMMUNITY</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
