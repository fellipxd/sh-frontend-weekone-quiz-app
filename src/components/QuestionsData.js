import React from "react";

const QuestionsData = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.questionText}</h2>
          <ul>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionsData;


export const questionLoader = async () => {
  const res = await fetch(" http://localhost:4000/questions")

  return res.json()
}
