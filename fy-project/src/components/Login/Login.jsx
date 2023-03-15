import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login validation
    console.log("Logging in with email:", email, " and password:", password);

  };

  return (

    <form className="login__form" onSubmit={handleSubmit}>
      <Navbar />
      <h2 className="login__form_h">
        Welcome back, foodie! Login to your account
      </h2>
      <ul className="login__form_input">
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
        <li className="form__list_item_c">
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
        <li className="form__checkbox">
          <input
            className="form__checkbox_input"
            type="checkbox"
            name="keep-me-logged-in"
            id="keepMeLoggedIn" />
          <p className="form__checkbox_p">Keep me logged in</p>
        </li>
        <li className="form__list_item">
          <button className="form__btn" type="submit">Login</button>

          <Link to='#' className="list__item_a">
            Forgot password
          </Link>
        </li>
      </ul>
      <p className="login__form_p">
        Don't have an account?
        <Link
          to="/signup"
          className="login__form_p_a"
        > Sign up</Link>
      </p>
    </form>
  );
};

export default Login;
