import React from "react";
import Button from "../components/Button";

const Home = () => {
  return <div>
    <h2>Coding Quiz Challenge</h2>
    <p>Try to answer the following code-related questions withing the time limit.</p>
    <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
    <Button text="Start Quiz" link="/questions/1"/>
  </div>;
};

export default Home;
