import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import mmcLogo from "../../assets/mmcLogo.svg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link, NavLink ,useNavigate } from "react-router-dom";
const Header = () => {
  const headerTopRef = useRef(null);
  const [showAccount, setShowAccount] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerTopRef.current.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 4px 12px";
      } else {
        headerTopRef.current.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  const handleRedirectToLogin = ()=>{
    navigate("/login");
    setShowAccount(false);
  }
  return (
    <header className="header" ref={headerTopRef}>
      <div className="container-header">
        <div className="header-top">
          <Link to="/" className="logo">
            <img src={mmcLogo} width={60} alt="app-logo" />
          </Link>
          <div className="menu">
            <ul className="nav-menu">
              <li className="menu-item">
                <NavLink className="menu-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/speakers">
                  Speakers
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-left">
            <div className="header-search-box">
              <input type="search" placeholder="search for Event ..." />
              <div className="header-search-icon">
                <SearchRoundedIcon />
              </div>
            </div>
            <div className="account-box">
              <button
                className="account-icon"
                onClick={() => {
                  setShowAccount(!showAccount);
                }}
              >
                <PersonOutlineIcon />
              </button>
              {showAccount && (
                <div className="auth-box">
                  <button className="btn login-btn" onClick={()=>{handleRedirectToLogin()}}>login</button>
                  <Link className="btn register-btn" to="/register">register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
