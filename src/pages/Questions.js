import React from "react";
import { useLoaderData } from "react-router";

const Questions = () => {
  const questions = useLoaderData();

  return (
    <div>
      {questions.map((question) => (
        <p key={question.id}>{question.questionText}</p>
      ))}
    </div>
  );
};

export default Questions;
