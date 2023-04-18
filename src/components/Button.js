import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <div>
      <button type="button">
        <Link to={link}>{text}</Link>
      </button>
    </div>
  );
};

export default Button;
