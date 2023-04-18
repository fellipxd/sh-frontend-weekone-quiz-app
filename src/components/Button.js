import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <div>
      <Link to={link}>
        <button type="button">{text}</button>
      </Link>
    </div>
  );
};

export default Button;
