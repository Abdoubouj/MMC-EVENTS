import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginForm.css'


export default function LoginForm() {

    const [userInputData, setUserInputData] = useState({
        userName: "",
        password: "",
    });

    // This will handle all the input data and store it in an object
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInputData({ ...userInputData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        var regex = "^(?:|[^a-zA-Z0-9]*)$";
        if (userInputData.userName == "" && userInputData.password == "") {
            alert("Please Fill all the details before submitting");
        } else if (userInputData.userName == "") {
            alert("Please Fill user name before submitting");
        } else if (userInputData.password == "") {
            alert("Please Fill Psssword before submitting");
        } else if (userInputData.userName.match(regex) || userInputData.password.match(regex)) {
            alert("Sorry! That's not a valid Input");
        } else {
            alert("Logged in successfully");
        }
    }

    return (
        <div className='outerdiv'>
            <form className="form">
                <span className="signup">Sign In</span>
                <input type="name" placeholder="User name" className="form--input" name="userName" value={userInputData.userName} onChange={handleInput} />
                <input type="password" placeholder="Password" className="form--input" name="password" value={userInputData.password} onChange={handleInput} />
                <div className="form--marketing">
                    <div style={{ marginRight: "15rem" }}>
                        <input id="okayToEmail" type="checkbox" />
                        <label htmlFor="okayToEmail" className="checkbox">
                            Remember me
                        </label>
                    </div>
                    <a href="">Forgot Password</a>
                </div>

                <div className='buttons-div'>
                    <button className="form--submit" onClick={handleFormSubmit}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

