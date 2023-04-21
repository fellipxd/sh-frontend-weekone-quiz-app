import Button from "../components/Button";
import { useLoaderData } from "react-router";
const HighScores = () => {
  const highScore = useLoaderData()
  console.log('highscore', highScore.all_score)
  const scores = highScore.all_score

  // const clearHighscores = () => {
  //   fetch('https://quizapp.topdatanig.com/clear-highscores.php', {
  //     method: 'DELETE',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // Refresh the page to display the updated high scores
  //       window.location.reload();
  //     })
  //     .catch((error) => console.error(error));
  // };
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
