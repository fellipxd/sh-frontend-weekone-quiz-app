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

  const clearHighscores = () => {
    fetch('https://quizapp.topdatanig.com/clear.php', {
      method: 'DELETE',
    })
      .then((res) => res.json())

      .catch((error) => console.error(error));
  };

  const handleSignout = () => {
    sessionStorage.clear()
    navigate("/");
  };

  return (
    <div>
      <h2>Highscores</h2>
      <ul className="list">
        {scores?.map((score) => (
          <ol>
            <p>{score?.initials}: {score.score}</p>
          </ol>
        ))}
      </ul>
      <div className="btn">
        <Button text="Signout" onClick={handleSignout} />
        <Button text="Clear Highscores" onClick={clearHighscores} />
      </div>
    </div>
  );
};

export default HighScores;
