import "./App.css";
import EventDetails from "./components/EventDetails/EventDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Speakers from "./components/Speakers/Speakers";
import SpeakerDetails from "./components/SpeakerDetails/SpeakerDetails";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Events from "./components/Events/Events";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { UseContext, UseContextProvider } from "./components/hooks/UseContext";
import { useContext, useEffect, useState } from "react";
import About from "./components/About/About";

function App() {
  const location = useLocation();
  const navigateTo = useNavigate();
  const path = location.pathname;

  const { isAuth, userRole, setIsAuthenticatedToggle } =
    useContext(UseContext);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");

    if (loggedInStatus === "true") {
      setIsAuthenticatedToggle(true, "admin");
      navigateTo("/AdminDashboard");
    } else {
      setIsAuthenticatedToggle(false, "user");
      navigateTo("/");
    }
  }, [isAuth]);

  return (
    <>
      {isAuth === true ? (
        <AdminDashboard />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/events" element={<Events type="all" />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/speakers/:id" element={<SpeakerDetails />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/about" element={<About />} />
            {userRole === "admin" && isAuth === true ? (
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
            ) : (
              <></>
            )}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
