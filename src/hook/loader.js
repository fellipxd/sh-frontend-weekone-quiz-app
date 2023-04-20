
export const questionDataLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/questions/" + id);

  return res.json();
};
