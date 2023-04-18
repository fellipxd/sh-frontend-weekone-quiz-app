import React from "react";
import { useLoaderData } from "react-router";

const Questions = () => {
  const questions = useLoaderData();

  return (
    <div>
      {questions.map((question) => (
        <h1 key={question.id}>{question.questionText}</h1>
      ))}
    </div>
  );
};

export default Questions;
