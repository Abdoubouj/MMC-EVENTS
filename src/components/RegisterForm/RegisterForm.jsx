import React from 'react';
import "./RegisterForm.css"
import { Link } from 'react-router-dom';
import vector from "../../assets/vector.svg";


export default function RegisterForm() {   
    return (
        <section className="register-section">
        <div className="left">
          <img src={vector} alt="#" />
        </div>
        <div className="right">
          <div className="form-container">
            <h1>Create an account</h1>
            <form action="">
              <div className="field form-prenom">
                <label htmlFor="prenom">prenom</label>
                <input type="text" placeholder="prenom" />
              </div>
              <div className="field form-nom">
                <label htmlFor="nom">nom</label>
                <input type="text" placeholder="nom" />
              </div>
              <div className="field form-adresse">
                <label htmlFor="adresse">adresse</label>
                <input type="text" placeholder="adresse" />
              </div>
              <div className="field form-sexe">
                <label htmlFor="sexe">sexe</label>
                <select name="sexe" id="sexe">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
              </div>
              <div className="field form-GSM">
                <label htmlFor="GSM">GSM</label>
                <input type="text" placeholder="GSM" />
              </div>
              <div className="field form-email">
                <label htmlFor="email">email</label>
                <input type="text" placeholder="email" />
              </div>
              <div className="field form-password">
                <label htmlFor="password">password</label>
                <input type="password" placeholder="password" />
              </div>
              <div className="field form-confirm-password">
                <label htmlFor="confirm-password">confirm password</label>
                <input type="password" placeholder="password" />
              </div>
              <button className="btn create-account-btn">create account</button>
              <Link className="btn sign-in-btn" to="/login">sign in</Link>
            </form>
          </div>
        </div>
      </section>
    );
}
