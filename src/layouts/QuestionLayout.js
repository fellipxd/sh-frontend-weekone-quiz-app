import React from "react";
import { Outlet } from "react-router";

const QuestionLayout = () => {
  return (
    <div>
      <h1>Questions</h1>
      
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
