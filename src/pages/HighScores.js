import Button from "../components/Button";
import { useLoaderData } from "react-router";
const HighScores = () => {
  const highScore = useLoaderData()

  return (
    <div>
      <h2>Highscores</h2>
      <ul className="list">
        {highScore.map((score) => (
          <ol>{score.result}</ol>
        ))}
      </ul>
      <div className="btn">
        <Button text="Go Back" link="/" />
        <Button text="Clear Highscores" />
      </div>
    </div>
  );
};

export default HighScores;
