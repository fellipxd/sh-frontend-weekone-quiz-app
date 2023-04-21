export const highScoreLoader = async () => {
  const res = await fetch("https://quizapp.topdatanig.com/send_score.php");

  return res.json();
};