import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
        corrupti ad dolore excepturi? Dolores perferendis impedit ullam et,
        ratione sunt?
      </p>
      <Button link="/" text="Homepage" />
    </div>
  );
};

export default NotFound;
