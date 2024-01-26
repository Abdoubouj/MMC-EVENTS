import React, { useState } from 'react';
import "../LoginForm/LoginForm.css"
export default function RegisterForm() {   
    return (
        <div className='outerdiv'>
            <form className="form">
                <span className="signup">Sign Up</span>
                <input type="username" placeholder="User name" className="form--input" name="userName" />
                <input type="email" placeholder="Email address" className="form--input" name="email"  />
                <input type="tel" placeholder="Contact Number" className="form--input" maxLength="10" name="phoneNumber"  />
                <input type="password" placeholder="Password" className="form--input" name="password"   />
                <input type="password" placeholder="Confirm password" className="form--input" name="confirmPasword"  />

                <div className='buttons-div'>
                    <button className="form--submit" >
                        Save & Verify
                    </button>
                </div>

              
            </form>

        </div>
    );
}
