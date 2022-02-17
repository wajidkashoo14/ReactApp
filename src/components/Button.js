import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Styles = ["btn-primary", "btn-large", 'btn-card', 'btn-form','btn-footer'];

const Sizes = ["btn-small", "btn-large", 'btn-footer'];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];
  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <Link to="/">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
