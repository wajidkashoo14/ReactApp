import React from "react";
import Button from "../Button";
import Square from "./Square";
import "./HeroSection.css";
import Developer from "../assets/developer.png";
import Triangle from "./Triangle";

function HeroSection() {
  return (
    <div className="hero-section">
      <article className="hero">
        <h1 className="hero-heading">Ready For Any Web Projects</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit
          in dolor quae earum fuga enim obcaecati velit nobis deleniti.
        </p>
        <Button buttonStyle="btn-large">Explore Now <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#03389C" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg></Button>
          <div className="square_sq">
         <Square />
          </div>

          {/* <div className="triangle__home">
          <Triangle />
          </div> */}
      </article>
      <div className="hero-svg">
        <img src={Developer} className="hero-img" />
      </div>
      
    </div>
  );
}


export default HeroSection;
