import React from "react";
import "./Team.css";

function Team() {
  return (
    <section className="ourteam__section">
      <h1 className="ourteam__section_header">Meet Our Passionate Team Behind Every Delicious Bite</h1>
      <ul className="ourteam">
        <li className="ourteam__card">
          <img className="ourteam__card_image" />
          <div className="ourteam__card_text">
          <h4 className="ourteam__card_h">Jinny wilson</h4>
            <p className="ourteam__card_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              repudiandae tempora, pariatur accusamus praesentium error.
            </p>
          </div>
        </li>
        <li className="ourteam__center_card">
          <img className="ourteam__card_image" />
          <div className="ourteam__card_text">
          <h4 className="ourteam__center-card_h">Jinny wilson</h4>
            <p className="ourteam__center-card_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              repudiandae tempora, pariatur accusamus praesentium error.
            </p>
          </div>
        </li>
        <li className="ourteam__card">
          <img className="ourteam__card_image" />
          <div className="ourteam__card_text">
          <h4 className="ourteam__card_h">Jinny wilson</h4>
            <p className="ourteam__card_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              repudiandae tempora, pariatur accusamus praesentium error.
            </p>
          </div>
        </li>
      </ul>
    </section >
  );
}

export default Team;
