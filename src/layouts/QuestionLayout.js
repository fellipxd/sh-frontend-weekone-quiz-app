import React from "react";
import { Outlet, useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const QuestionLayout = () => {
  const questions = useLoaderData();

  return (
    <div>
      <div className="questions">
        {questions.map((question) => (
          <p className="question-number">
            <Link to="/questions/1">{question.id}</Link>
          </p>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
