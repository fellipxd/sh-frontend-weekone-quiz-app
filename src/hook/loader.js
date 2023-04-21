export const highScoreLoader = async () => {
  const res = await fetch("https://quipapp.000webhostapp.com/get_highscores.php");

  return res.json();
};
