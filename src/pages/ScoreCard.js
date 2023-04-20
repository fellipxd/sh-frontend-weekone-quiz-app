import React, { useContext } from "react";
import Button from "../components/Button";
import AppContext from "../state/context";

const ScoreCard = () => {

  const { score } = useContext(AppContext);
  console.log("score", score)
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
