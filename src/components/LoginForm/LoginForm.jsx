import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import vector from "../../assets/vector.svg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { auth } from "../../features/firebaseAuth";
import { UseContext } from "../hooks/UseContext";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/userSlice";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const users = useSelector((state) => state.user.users);

  const { setIsAuthenticatedToggle } = useContext(UseContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const checkIfEmailExist = (email) => {
    const check = users.some((user) => user.userEmail === email);
    return check;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(checkIfEmailExist(username))
    {
      if (users.some((user) => user.userPassword === password)) {
         setIsAuthenticatedToggle(true,"User");
         localStorage.setItem("isLoggedIn", true);
         
         navigateTo("/AdminDashboard");
       
      }
    }
    else{
 
      console.log(checkIfEmailExist(username));
    }
       
  };
useEffect(()=>{
  dispatch(getUsers());
},[dispatch])
  return (
    <section className="login-section">
      <div className="left">
        <img src={vector} alt="#" />
      </div>
      <div className="right">
        <div className="form-container">
          <h1>Sign in</h1>
          <form action="">
            <div className="field form-email">
              <label htmlFor="email">email</label>
              <div className="emailInput">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="email"
                />
                <div className="emailIcon">
                  <EmailOutlinedIcon />
                </div>
              </div>
            </div>
            <div className="field form-password">
              <label htmlFor="password">password</label>
              <div className="passwordInput">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="password"
                />
                <div className="passwordIcon">
                  <VpnKeyOutlinedIcon />
                </div>
              </div>
            </div>
            <button className="btn create-account-btn" onClick={handleSubmit}>
              sign in
            </button>
            <p>
              Don't have account ?<Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
