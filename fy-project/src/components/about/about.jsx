import React from "react";
import "./About.css"; // import the CSS file

function About() {
  return (
    // background image
    <section className="background_image">
      <div className="section__main">
        <h1 className="section__main_h">Welcome to our website!</h1>
        <p className="section__phara">
          We are dedicated to providing a wide variety of food options to cater to every taste and dietary preference. Our team works closely with our restaurant partners to ensure that their menus are available for delivery and that their food arrives at your door just as fresh and delicious as it would be in the restaurant.
          We are committed to delivering high-quality meals from the best restaurants in town, right to your doorstep
        </p>
        <p className="section__phara">
        At our food delivery website, we are committed to making food delivery convenient, enjoyable, and accessible to everyone.
        </p>
      </div>
    </section>
  );
}

export default About;
