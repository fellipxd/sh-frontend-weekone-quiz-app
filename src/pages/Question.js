import React from "react";
import { useLoaderData} from "react-router";

const Question = () => {
  const question = useLoaderData();

  return (
    <div>
      <h2>{question.questionText}</h2>
      <ul>{question.options.map((option) => (
        <li key={option.id}>{option.text}</li>
      ))}</ul>
    </div>
  );
};

export default Question;
