import { useContext, useEffect } from "react";
import Button from "../components/Button";
import { useLoaderData, useNavigate } from "react-router";
import AppContext from "../state/context";
const HighScores = () => {
  const highScore = useLoaderData()
  console.log('highscore', highScore.all_score)
  const scores = highScore.all_score
  const {
    setCount
  } = useContext(AppContext);

  const navigate = useNavigate();

  setCount(0);
  useEffect(() => {
    const loggedInFromSession = sessionStorage.getItem('loggedIn');
    if (!loggedInFromSession) {
      navigate('/login');
    }
  }, [navigate, setCount]);

  return (
    <div>
      <h2>Highscores</h2>
      <ul className="list">
        {scores.map((score) => (
          <ol>
            <p>{score.initials}: {score.score}</p>
          </ol>
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
