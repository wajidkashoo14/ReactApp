import React from "react";
import './Card.css'

function Card({ img, title, info, btn }) {
  return (
    <>
      <div className="card">
        <img src={img} alt={title} />
          <h4>{title}</h4>
          <p>{info}</p>
          {btn && <button>hi</button>}
        </div>
    </>
  );
}

export default Card;
