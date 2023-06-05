import React from "react";
import BannerImage from "../assets/1beef.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          nesciunt fugiat delectus modi? Rerum blanditiis, rem quasi facilis
          perspiciatis veniam?
        </p>
      </div>
    </div>
  );
}

export default About;
