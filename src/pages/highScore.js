import React, { useContext } from "react";
import Button from "../components/Button";
import AppContext from "../state/context";

const HighScoreCard = () => {

  return (
    <div class='box'>
      <h2>High Scores</h2>
      <ol>
        <li><span>MJ</span>:66</li>
      </ol>
      <Button text="Submit" link="/" />
    </div>
  );
};

export default HighScoreCard;
