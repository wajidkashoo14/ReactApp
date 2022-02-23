import React from "react";
import './Card.css'

function Card({ img, title, info, }) {
  return (
    <>
      <div className="card">
        <img className="cardTech-img" src={img} alt={title} />
          <h4>{title}</h4>
          <p>{info}</p>
          
        </div>
    </>
  );
}

export default Card;
