import React from "react";
import "./about.css"; // import the CSS file

function About() {
  return (
    <section className="background_image">
      <div className="section__main">
        <h1 className="section__main_h">About Us</h1>
        <p className="section__phara">
          Welcome to our website! We are a team of developers dedicated to
          creating amazing web applications that help businesses and individuals
          succeed.
        </p>
        <p className="section__phara">
          Our goal is to provide high-quality, reliable, and user-friendly
          software solutions that exceed our clients' expectations.
        </p>
        <p className="section__phara">
          If you have any questions or feedback, please don't hesitate to
          contact us.
        </p>
      </div>
    </section>
  );
}

export default About;
