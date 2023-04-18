export const questionLoader = async () => {
  const res = await fetch("http://localhost:4000/questions");

  return res.json();
};
