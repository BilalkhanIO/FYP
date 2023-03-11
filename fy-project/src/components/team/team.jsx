import React from "react";
import "./team.css";

function Team() {
  return (
    <section className="section">
      <h1 className="section__title"> Our Team</h1>
      <div className="section__container">
        <div className="team__img">
          <img className="bgimage" src="" alt="" />
          <h4 className="team__img_heading">Jinny wilson</h4>
          <p className="team__img_phara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repudiandae tempora, pariatur accusamus praesentium error.
          </p>
        </div>
        <div className="team__img_second">
          <img className="bgimage" src="" alt="" />
          <h4 className="team__img_heading">Jinny wilson</h4>
          <p className="team__img_phara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            excepturi harum vitae accusamus sapiente nihil expedita eos
            molestias maiores ipsa similique tempora officiis, beatae,
            laboriosam dignissimos modi. Molestias id aspernatur officiis, modi
            sit, blanditiis dicta, repellendus obcaecati quos vitae itaque!
          </p>
        </div>
        <div className="team__img">
          <img className="bgimage" src="" alt="" />
          <h4 className="team__img_heading">Jinny wilson</h4>

          <p className="team__img_phara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repudiandae tempora, pariatur accusamus praesentium error.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
