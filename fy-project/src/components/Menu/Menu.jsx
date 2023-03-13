import React from "react";
import "./menu.css";

function Menu() {
  return (
    <menu className="background__menu">
      <h1 className="menu__heading">Discover Menus</h1>
      <div className="section__label">
        <div className="section__labels">
          <p>Label 1</p>
        </div>
        <div className="section__labels">
          <p><a href="">Label 2</a></p>
        </div>
        <div className="section__labels">
          <p>Label 3</p>
        </div>
        <div className="section__labels">
          <p>Label 4</p>
        </div>
      </div>
      <h2 className="menu__h"></h2>
      <div className="image__section">
        <div>
            <img className="image" />
        </div>
        <div>
            <h3 className="dish__name">
                Break Fast
            </h3>
            <p className="dish__phara">
            Welcome to our online breakfast menu! We offer a variety of delicious and nutritious breakfast options to fuel your day.
            </p>
        </div>
        <div className="menu__price">
            <p className="menu__price_p">
                price : <strong>230 </strong>
            </p>
            <button className="menu__price_btn">
               +
            </button>
        </div>
      </div>

    </menu>
  );
}
export default Menu;
