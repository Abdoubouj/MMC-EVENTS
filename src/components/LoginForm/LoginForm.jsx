import React, { useState } from 'react';
import './LoginForm.css'


export default function LoginForm() {

   



    return (
        <div className='outerdiv'>
            <form className="form">
                <span className="signup">Sign In</span>
                <input type="name" placeholder="User name" className="form--input" name="userName"  />
                <input type="password" placeholder="Password" className="form--input" name="password"  />
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
                    <button className="form--submit" >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

