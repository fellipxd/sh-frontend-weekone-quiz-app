import React, { useState } from "react";
import Button from "../components/Button";

const ScoreCard = () => {
  const [score] = useState("100");

  return (
    <div>
      <h2>All done!</h2>
      <p>Your final score is {score}</p>
      <div className="initials">
        <span>Enter initials:</span>
        <div>
          <input type="text" />
        </div>
        <div>
          <Button text="Submit" link="/" />
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
