import React from 'react';
import './LoginForm.css'
import { Link } from "react-router-dom";
import vector from "../../assets/vector.svg";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

export default function LoginForm() {   

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
                <input type="text" placeholder="email" />
                <div className="emailIcon">
                <EmailOutlinedIcon/>
                </div>
                </div>
              </div>
              <div className="field form-password">
                <label htmlFor="password">password</label>
                <div className="passwordInput">
                <input type="password" placeholder="password" />
                <div className="passwordIcon">
                <VpnKeyOutlinedIcon/>
                </div>
                </div>
              </div>
              <button className="btn create-account-btn">sign in</button>
              <p>
              Don't have account ?
              <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
}

