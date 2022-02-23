import React from "react";
import Card from "./Card";
import ImageOne from '../assets/UXimage.png'
import ImageTwo from '../assets/Reactimage.png'
import ImageThree from '../assets/Codingimage.png'
import "./Card.css";

function CardSection() {
  return (
    <div className="card-section-container">
      <h1>Know More About Me</h1>
      <div className="card-container">
        <div className="card-wrapper">
          <Card
          img={ImageOne}
            title="UI/UX"
            info="lorem10 i like autum and winter un the deason"
            
          />
          <Card
          img={ImageTwo}
            title="Prototype"
            info="lorem10 i like autum and winter un the deason"
            
          />
          <Card
          img={ImageThree}
            title="Develop"
            info="lorem10 i like autum and winter un the deason  "
            
          />
        </div>
      </div>
    </div>
  );
}

export default CardSection;
