import React, { useEffect, useState } from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import vector from "../../assets/vector.svg";
import { useDispatch, useSelector } from "react-redux";

import { AddNewUser, getUsers } from "../../features/userSlice";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.usersStatus);

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    gender: "Men",
    phone: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const checkIfEmailExist = (email) => {
  const check = users.some((user) => user.userEmail === email);
  return check;
};


  const handleSubmitData = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    // Validate form fields
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // If no errors, submit the form
      try {

        if(!checkIfEmailExist(formData.userEmail))
        {
          console.log(checkIfEmailExist(formData.userEmail));
          setSubmitting(false);
          setSubmitSuccess(true);
          dispatch(AddNewUser(formData));
          console.log('====================================');
          console.log(status);
          console.log('====================================');
        }
        else
        {
          console.log("====================================");
          console.log("Email already Exist");
          console.log("====================================");
        }
        setFormData({
          userEmail: "",
          userPassword: "",
          firstName: "",
          lastName: "",
          gender: "Men",
          phone: "",
          city: "",
        });
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitting(false);
        setSubmitError(
          "An error occurred during submission. Please try again."
        );
      }
    } else {
      setSubmitting(false);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!data.city.trim()) {
      errors.city = "City is required";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(data.phone)) {
      errors.phone = "Phone must contain only digits";
    }
    if (!data.userEmail.trim()) {
      errors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.userEmail)) {
      errors.userEmail = "Invalid email address";
    }
    if (!data.userPassword.trim()) {
      errors.userPassword = "Password is required";
    } else if (data.userPassword.length < 6) {
      errors.userPassword = "Password must be at least 6 characters long";
    }
    return errors;
  };

    useEffect(() => {
      dispatch(getUsers());
    
    }, [dispatch]);
  return (
    <section className="register-section">
      <div className="left">
        <img src={vector} alt="#" />
      </div>
      <div className="right">
        <div className="form-container">
          <h1>Create an account</h1>
          <form onSubmit={handleSubmitData}>
            <div className="field form-prenom">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              {formErrors.firstName && (
                <div className="error">{formErrors.firstName}</div>
              )}
            </div>
            <div className="field form-nom">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {formErrors.lastName && (
                <div className="error">{formErrors.lastName}</div>
              )}
            </div>
            <div className="field form-adresse">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
              {formErrors.city && (
                <div className="error">{formErrors.city}</div>
              )}
            </div>
            <div className="field form-sexe">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>
            <div className="field form-GSM">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {formErrors.phone && (
                <div className="error">{formErrors.phone}</div>
              )}
            </div>
            <div className="field form-email">
              <label htmlFor="userEmail">Email</label>
              <input
                type="text"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="Email"
              />
              {formErrors.userEmail && (
                <div className="error">{formErrors.userEmail}</div>
              )}
            </div>
            <div className="field form-password">
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                name="userPassword"
                value={formData.userPassword}
                onChange={handleChange}
                placeholder="Password"
              />
              {formErrors.userPassword && (
                <div className="error">{formErrors.userPassword}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="create-account-btn"
            >
              {submitting ? "Creating Account..." : "Create Account"}
            </button>
            {submitError && <div className="error">{submitError}</div>}
            {submitSuccess && (
              <div className="success">Account created successfully!</div>
            )}
            <Link className="create-account-btn" to="/login">
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
