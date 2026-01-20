import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("Logging in with email:", email, " and password:", password);

    // TODO: Replace this with an actual API call.
    // This timeout simulates the network request.
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
          <label className="form__checkbox_p" htmlFor="keepMeLoggedIn">Keep me logged in</label>
        </li>
        <li className="form__list_item">
          <button className="form__btn" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

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
