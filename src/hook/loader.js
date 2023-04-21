export const highScoreLoader = async () => {
  const res = await fetch("https://quizapp.topdatanig.com/get_highscores.php");

  return res.json();
};
