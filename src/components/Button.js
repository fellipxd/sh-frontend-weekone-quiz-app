import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, onClick }) => {
  return (
    <div>
      <Link to={link}>
        <button type="button" onClick={onClick}>{text}</button>
      </Link>
    </div>
  );
};

export default Button;
