import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginForm.css'

export default function RegisterForm() {
    const [userInputData, setUserInputData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPasword: "",
        phoneNumber: ""
    });

    // This will handle all the input data and store it in an object
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInputData({ ...userInputData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // For Phone number check
        var regex = "^[0-9]+$";
        if (userInputData.userName == "" || userInputData.email == "" || userInputData.password == "" || userInputData.confirmPasword == "" || userInputData.phoneNumber == "") {
            alert("Please Fill all the details before submitting");
        } else if (userInputData.password != userInputData.confirmPasword) {
            alert("Password does not match");
        } else if (userInputData.phoneNumber.length != 10) {
            alert("Phone Number must contain at least ten phone numbers");
        } else if (!userInputData.phoneNumber.match(regex)) {
            alert("Please enter a valid phone number");
        } else {
            alert("Sign up Successfully Completed");
        }
    }
    return (
        <div className='outerdiv'>
            <form className="form">
                <span className="signup">Sign Up</span>
                <input type="username" placeholder="User name" className="form--input" name="userName" value={userInputData.userName} onChange={handleInput} />
                <input type="email" placeholder="Email address" className="form--input" name="email" value={userInputData.email} onChange={handleInput} />
                <input type="tel" placeholder="Contact Number" className="form--input" maxLength="10" name="phoneNumber" value={userInputData.phoneNumber} onChange={handleInput} />
                <input type="password" placeholder="Password" className="form--input" name="password" value={userInputData.password} onChange={handleInput} />
                <input type="password" placeholder="Confirm password" className="form--input" name="confirmPasword" value={userInputData.confirmPasword} onChange={handleInput} />

                <div className='buttons-div'>
                    <button className="form--submit" onClick={handleSubmit}>
                        Save & Verify
                    </button>
                </div>

                {/* <div className='buttons-div'>
                    <NavLink to="/" style={{ width: "100%" }}>
                        <button className="form--submit">
                            Back
                        </button>
                    </NavLink>
                    <NavLink to="/signup" style={{ width: "100%" }}>
                        <button className="form--submit" onClick={handleSubmit}>
                            Save & Verify
                        </button>
                    </NavLink>
                </div> */}
            </form>

        </div>
    );
}
