import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import './signup.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        // event.preventDefault();
        //     // Perform sign up validation
        //     console.log(
        //         { "Signing up with email:"
        //         {email},
        //         " and password:"
        //         password,
        //         " and confirm password:"
        //         confirmPassword}
        //     );
    };
    return (
        <form className="signup__form" onSubmit={handleSubmit}>
            <Navbar/>
            <h2 className="signup__form_h">
                Join the foodie movement and sign up now!
            </h2>
            <ul className="signup__form_input">
                <li className="form__list_item">
                    <label className="form__label" htmlFor="Name">Name</label>
                    <input
                        className="form__input_field"
                        type="text" id="Name"
                        placeholder="Name" 
                        value={name} 
                        onChange={handleNameChange} 
                        required />
                </li>
                <li className="form__list_item">
                    <label className="form__label" htmlFor="Email">Email</label>
                    <input
                        className="form__input_field"
                        type="email"
                        id="Email"
                        placeholder="example@xyz.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </li>
                <li className="form__list_item">
                    <label className="form__label" htmlFor="Password">Password</label>
                    <input
                        className="form__input_field"
                        type="password"
                        id="Password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        minLength={6}
                        required
                    />
                </li>
                <li className="form__list_item">
                    <label className="form__label" htmlFor="ConfirmPassword">Confirm Password</label>
                    <input
                        className="form__input_field"
                        type="password"
                        id="ConfirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        minLength={6}
                        required
                    />
                </li>
                <li className="form__list_item">
                    <button className="form__btn" type="submit">Sign up</button>
                </li>
            </ul>
            <p className="signup__form_p">Already have an account? <Link className="signup__form_p_a" to='/login'>Log in</Link></p>
        </form>
    )
};

export default Signup;