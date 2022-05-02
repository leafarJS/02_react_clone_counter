import React from "react";
import "./Button.css";
const Button = ({ text, isButtonClick, handleClick }) => {
  return (
    <button
      className={isButtonClick ? "btn-click" : "btn-reset"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
